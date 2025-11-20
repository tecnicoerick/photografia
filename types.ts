import React from 'react';

export interface PhotoItem {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface ServiceItem {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
}

export enum AIAnalysisStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface AICaptionResponse {
  caption: string;
  technicalAnalysis: string;
  tags: string[];
}