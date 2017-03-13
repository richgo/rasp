import {Injectable} from '@angular/core';

const CONFIG = [
  {
    name: 'Alignment of Ambition',
    gid: 0,
    description: 'The extent to which the aims of the respective partners in the shared service programme are understood, shared openly and are not in conflict',
    subgrouping: [
        { name: 'Business buy-in',
          sid: 0,
            questions: [
                { question: 'Does the wider organisation understand and support the ambitions of each organisation?' },
                { question: 'Does everyone have a common understanding of the objectives of the programme: What success looks like?'},				
                { question: 'Is it accepted that middle-management responsibilities are likely to be impacted?'},				
                { question: 'Is there a post-delivery operating model based on an agreed enterprise architecture if required?'},			
                { question: 'Is there an agreed single staff communications plan?'}            
            ]},
        { name: 'Knowing what is to be shared',
         sid: 1,
          questions: [
                { question: 'Has an exercise been undertaken to quantify what is there today – costs, systems, metrics, performance, volumes – as a base for comparison with the shared service proposal?' },
                { question: 'Has a full scoping exercise been carried out to define the data, processes, buildings, teams and system to be shared, including ensuring the minimum to be shared is actually sustainable? '},				
                { question: 'Is the new operating model for sharing services clear in terms of integrated management functions and changed responsibilities where activities are shared?' },				
                { question: 'Is there an agreed legal basis for operation?'},			
                { question: 'Has a gap analysis been undertaken to identify the extent of existing alignment or differences?'},     
                { question: 'Has it been determined (and agreed for each party) what benefits the shared services will target, so that decision can be made around what IT (for example) needs to be integrated/retired/retained to attain those benefits?' },				
				        { question: 'Is there a clear definition of WHY sharing is beneficial (e.g. capacity, economies of scale, savings, resilience, accelerating change, reducing risk, retaining skills, political demand etc). Note these may be specific and measurable or general aims.' }	
	        ]},
        { name: 'Political Backing', sid: 2,
          questions: [
              { question: "Has political backing been secured, including ensuring that political issues and concerns are identified and addressed (e.g. subsidiarity, local priorities, policy or governance matters)?"},
              { question: "Are politicians aware of the nature of the commitment in terms of resources, risks and shared priorities? Has this been made explicit in terms of posts to be lost? Will the plans have public visibility and are members briefed to explain this to constituents?" },
              { question: "How will decisions be made? Is integrated governance possible? If partners require significant degrees of independence a shared service is likely to be much more complex." },
              { question: "Has allowance been made to enable parties to walk away from the shared service? This is not the desired outcome, but an exit plan from the beginning and a fixed term planning horizon, rather than ‘life’, can avoid partners from feeling ‘trapped’." },
              { question: "Are there competing shared service projects (existing or planned) which will conflict or take priority?" },
          ]},
        { name: 'Agreeing where best practice lies', sid: 3,
            questions: [
               { question: "Has an analysis been undertaken of the various options for absorbing best practice from partners, integrating new models and retiring duplicated or sub-optimal systems/processes?" },
               { question: "Are principles in place to ensure that compromises are possible where needed in the interests of the wider ambitions of joint working?" }, 
               { question: "Has it been determined whether to merge “as is” operations or if there is a need to radically reform operations, to deliver the agreed outcomes?" },
               { question: "Has the ‘missed opportunity verses capacity for change’ argument been fully explored? (Note: This discussion should be had without allowing a short-term project to drive a shared service – e.g., a shared service should not a based on the coincidental need that two organisations must replace their finance system or similar.)" },
            ]},
     ]
  },
  { name: 'Ethos and Cultures',
    gid: 1,
    description: 'The extent to which the style of partnership working has been defined, to align cultures and behaviours and to ensure consistency in the approach to trust, openness, escalation and problem solving.',
      subgrouping: [
        { name: 'Agreeing the principle',
          sid: 4,
            questions: [
                { question: 'Does the wider organisation understand and support the ambitions of each organisation?' },
                { question: 'Does everyone have a common understanding of the objectives of the programme: What success looks like?'},				
                { question: 'Is it accepted that middle-management responsibilities are likely to be impacted?'},				
                { question: 'Is there a post-delivery operating model based on an agreed enterprise architecture if required?'},			
                { question: 'Is there an agreed single staff communications plan?'}            
            ]},
          { name: 'Being a buyer or seller',
          sid: 5,
            questions: [
                { question: 'Have you determined who, when and where services will be delivered?' },
                { question: 'Are the ‘customer/supplier/partner’ terms understood where they are used?'},				
                { question: 'Unlike outsourcing, shared services is about sharing the benefits (e.g. of economies of scale). Is this understood in practice?'},				
                { question: 'Have you defined the basis for recharging and sharing costs? Will this be standard across multiple services or using different models per service area?'},			
                { question: 'Have you agreed who leads on delivery and avoided competing leadership?'}            
            ]},
        { name: 'Agreed branding and identity',
          sid: 6,
            questions: [
                { question: 'Has this been jointly agreed if necessary to show singularity of intent without compromising local distinctions where required?' },
                { question: 'Have affected staff and managers been involved in determining the identity and brand?'},				
                { question: 'Is the branding and identity appropriate – e.g. for the degree of commercialism and privatisation envisaged?'},				
                { question: 'Have practical issues involved with branding and identity be considered – such as the email domain that the share service team will use, to avoid managing multiple mailboxes?'},			
                  
            ]},
              { name: 'IT and digital literacy levels',
          sid: 7,
            questions: [
                { question: 'Are the skills necessary for a digital delivery model, and likely to be necessary for sharing, in place for managers, staff and even suppliers?' },
                { question: 'Has there been a baseline assessment of the starting point of the skills in place? A shared service can be a vehicle for improvement, but it takes time, and baselining can avoid a shared service being perceived as cause of historical issues.'},				
                     
            ]},
            
      ]
  },
  { name: 'Treatment of Resources',
    gid: 2,
    description: 'The mechanisms and principles for sharing all resources – buildings, teams, time, money, IT – coupled with how benefits and costs will be apportioned transparently and fairly.',
    subgrouping: []
  },
  { name: 'Risk management',
    gid: 3,
    description: 'Every shared services programme carries risk, particularly in areas such as leadership, communications and technology. An assessment is needed of those risks, with appropriate management controls, ownership and mitigation, to minimise risk likelihood or impact, should risks materialise.',
    subgrouping: []
  },
  { name: 'Governance',
    gid: 4,
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
