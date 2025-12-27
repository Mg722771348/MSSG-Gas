
import React from 'react';

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum PostcodeArea {
  Portsmouth = 'Portsmouth (PO)',
  Southampton = 'Southampton (SO)'
}
