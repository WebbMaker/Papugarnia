/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BirdSpecies {
  id: string;
  name: string;
  latinName?: string;
  description: string;
  type: 'small' | 'large';
  origin: string;
  funFact: string;
  colors: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentText: string;
  behaviorTip?: string;
}

export interface CustomerFeedback {
  id: string;
  author: string;
  rating: number;
  content: string;
  source: string;
}

export interface AdmissionTicket {
  type: string;
  price: string;
  note?: string;
}
