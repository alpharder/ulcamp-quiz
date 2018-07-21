export class QuadrantCoords {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export class QuadrantFields {
  coords: QuadrantCoords;
  color: string;
  labelText?: string;
  labelColor?: string;
}

export class SubQuadrantDefinition {
  position: SubQuadrantPosition;
  labelText?: string;
  labelColor?: string;
}

export class Quadrant extends QuadrantFields {
  constructor(fields: QuadrantFields) {
    super();
    Object.assign(this, fields);
  }

  createSubQuadrant(subQuadrantDefinition: SubQuadrantDefinition): Quadrant {
    const qx1 = Math.min(this.coords.x1, this.coords.x2);
    const qx2 = Math.max(this.coords.x1, this.coords.x2);
    const qxDiff = Math.abs(qx2 - qx1);
    const qxHalf = qxDiff / 2;

    const qy1 = Math.min(this.coords.y1, this.coords.y2);
    const qy2 = Math.max(this.coords.y1, this.coords.y2);
    const qyDiff = Math.abs(qy2 - qy1);
    const qyHalf = qyDiff / 2;

    const subQuadrantCoords: QuadrantCoords = {
      x1: 0, x2: 0,
      y1: 0, y2: 0
    };

    if (subQuadrantDefinition.position === SubQuadrantPositionTypes.BL) {
      subQuadrantCoords.x1 = qx1;
      subQuadrantCoords.x2 = qx1 + qxHalf;
      subQuadrantCoords.y1 = qy1;
      subQuadrantCoords.y2 = qy1 + qyHalf;
    } else if (subQuadrantDefinition.position === SubQuadrantPositionTypes.TL) {
      subQuadrantCoords.x1 = qx1;
      subQuadrantCoords.x2 = qx1 + qxHalf;
      subQuadrantCoords.y1 = qy2 - qyHalf;
      subQuadrantCoords.y2 = qy2;
    } else if (subQuadrantDefinition.position === SubQuadrantPositionTypes.BR) {
      subQuadrantCoords.x1 = qx2 - qxHalf;
      subQuadrantCoords.x2 = qx2;
      subQuadrantCoords.y1 = qy1;
      subQuadrantCoords.y2 = qy2 - qyHalf;
    } else if (subQuadrantDefinition.position === SubQuadrantPositionTypes.TR) {
      subQuadrantCoords.x1 = qx2 - qxHalf;
      subQuadrantCoords.x2 = qx2;
      subQuadrantCoords.y1 = qy2 - qyHalf;
      subQuadrantCoords.y2 = qy2;
    }

    return new Quadrant(Object.assign({}, subQuadrantDefinition, {coords: subQuadrantCoords, color: this.color}));
  }
}

export type SubQuadrantPosition =
  SubQuadrantPositionTypes.TL
  | SubQuadrantPositionTypes.BL
  | SubQuadrantPositionTypes.TR
  | SubQuadrantPositionTypes.BR;

export enum SubQuadrantPositionTypes {
  TL, TR,
  BL, BR
}

export class ChartBullet {
  x: number;
  y: number;
}
