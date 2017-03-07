import {Injectable} from '@angular/core';

const CONFIG = [
  {
    name: 'Alignment of Ambition',
    id: 0,
    description: 'The extent to which the aims of the respective partners in the shared service programme are understood, shared openly and are not in conflict',
    subgrouping: [
        { name: 'Business buy-in',
          id: 0,
            questions: [
                { question: 'Does the wider organisation understand and support the ambitions of each organisation?' },
                { question: 'Does everyone have a common understanding of the objectives of the programme: What success looks like?'},				
                { question: 'Is it accepted that middle-management responsibilities are likely to be impacted?'},				
                { question: 'Is there a post-delivery operating model based on an agreed enterprise architecture if required?'},			
                { question: 'Is there an agreed single staff communications plan?'}            
            ]},
        { name: 'Knowing what is to be shared',
         id: 1,
          questions: [
                { question: 'Has an exercise been undertaken to quantify what is there today – costs, systems, metrics, performance, volumes – as a base for comparison with the shared service proposal?' },
                { question: 'Has a full scoping exercise been carried out to define the data, processes, buildings, teams and system to be shared, including ensuring the minimum to be shared is actually sustainable? '},				
                { question: 'Is the new operating model for sharing services clear in terms of integrated management functions and changed responsibilities where activities are shared?' },				
                { question: 'Is there an agreed legal basis for operation?'},			
                { question: 'Has a gap analysis been undertaken to identify the extent of existing alignment or differences?'},     
                { question: 'Has it been determined (and agreed for each party) what benefits the shared services will target, so that decision can be made around what IT (for example) needs to be integrated/retired/retained to attain those benefits?' },				
				        { question: 'Is there a clear definition of WHY sharing is beneficial (e.g. capacity, economies of scale, savings, resilience, accelerating change, reducing risk, retaining skills, political demand etc). Note these may be specific and measurable or general aims.' }	
	        ]},
        { name: 'Political Backing', id: 2,},
        { name: 'Agreeing where best practice lies', id: 3,},
     ]
  },
  { name: 'Ethos and Cultures',
    id: 1,
    description: 'The extent to which the style of partnership working has been defined, to align cultures and behaviours and to ensure consistency in the approach to trust, openness, escalation and problem solving.',
    subgrouping: []
  },
  { name: 'Treatment of Resources',
    id: 2,
    description: 'The mechanisms and principles for sharing all resources – buildings, teams, time, money, IT – coupled with how benefits and costs will be apportioned transparently and fairly.',
    subgrouping: []
  },
  { name: 'Risk management',
    id: 3,
    description: 'Every shared services programme carries risk, particularly in areas such as leadership, communications and technology. An assessment is needed of those risks, with appropriate management controls, ownership and mitigation, to minimise risk likelihood or impact, should risks materialise.',
    subgrouping: []
  },
  { name: 'Governance',
    id: 4,
    description: 'Governance is key to success – how the shared service is run. There should be joint ownership of the programme (its risk, business case and key decisions) and the subsequent joint ownership of the shared services entity. Cooperation is needed, without trying to run the shared organisation by committee.',
    subgrouping: []
  },
];

// const ALL_ITEMS = CONFIG.reduce((result, category) => result.concat(category.items), []);

@Injectable()
export class QuestionConfig {
  getConfig() {
    return CONFIG;
  }  
}
