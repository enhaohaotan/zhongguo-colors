import { Data } from "./types";
import path from "path";
import { promises as fs } from "fs";
import { GetStaticProps } from 'next';

function calculateSectorPoints(radius: number, angleDegrees: number): [number, number] {
    // 将角度从度转换为弧度
    const angleRadians = (angleDegrees * Math.PI) / 180;
    
    // 起始点（在 y 轴负半轴上）
    const startAngle = -Math.PI / 2;
    let startX = radius * Math.cos(startAngle);
    let startY = radius * Math.sin(startAngle);
    
    // 结束点
    const endAngle = startAngle + angleRadians; // 顺时针增加角度
    let endX = radius * Math.cos(endAngle);
    let endY = radius * Math.sin(endAngle);
    
    // 保留4位小数
    startX = parseFloat(startX.toFixed(4));
    startY = parseFloat(startY.toFixed(4));
    endX = parseFloat(endX.toFixed(4));
    endY = parseFloat(endY.toFixed(4));
  
    // 处理 -0.0 的情况
    startX = startX === -0.0 ? 0.0 : startX;
    startY = startY === -0.0 ? 0.0 : startY;
    endX = endX === -0.0 ? 0.0 : endX;
    endY = endY === -0.0 ? 0.0 : endY;
  
    return [endX, endY];
  }

// 定义 getSVG 函数
export function getSVG(v: number): string {
    if (v === 0) {
        return '';
    }

    let svg = 'M 0 -20 L 0 -50 ';
    const angle = (v * 360) / 255;
    let x: number, y: number;

    if (angle > 180) {
        svg += 'A 50 50 0 0 1 0 50 ';
        [x, y] = calculateSectorPoints(50, angle);
        svg += `A 50 50 0 0 1 ${x} ${y} `;
        [x, y] = calculateSectorPoints(20, angle);
        svg += `L ${x} ${y} `;
        svg += 'A 20 20 0 0 0 0 20';
        svg += 'A 20 20 0 0 0 0 -20';
    } else {
        [x, y] = calculateSectorPoints(50, angle);
        svg += `A 50 50 0 0 1 ${x} ${y} `;
        [x, y] = calculateSectorPoints(20, angle);
        svg += `L ${x} ${y} `;
        svg += 'A 20 20 0 0 0 0 -20';
    }

    return svg;
}

export const getData = async (): Promise<Data> => {
  const filePath = path.join(process.cwd(), "public", "color.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
};
