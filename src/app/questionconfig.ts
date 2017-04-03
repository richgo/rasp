import {Injectable} from '@angular/core';

const CONFIG = [
  {
    name: 'Alignment of Ambition',
    gid: 0,
    description: 'The extent to which the aims of the respective partners in the shared service programme are understood, shared openly and are not in conflict',
    categories: [
        { name: 'Business buy-in',
          cid: 0,
            questions: [
                { qid: 0, question: 'Does the wider organisation understand and support the ambitions of each organisation?' },
                { qid: 1, question: 'Does everyone have a common understanding of the objectives of the programme: What success looks like?'},				
                { qid: 2, question: 'Is it accepted that middle-management responsibilities are likely to be impacted?'},				
                { qid: 3,  question: 'Is there a post-delivery operating model based on an agreed enterprise architecture if required?'},			
                { qid: 4, question: 'Is there an agreed single staff communications plan?'}            
            ]},
        { name: 'Knowing what is to be shared',
         cid: 1,
          questions: [
                { qid: 0, question: 'Has an exercise been undertaken to quantify what is there today – costs, systems, metrics, performance, volumes – as a base for comparison with the shared service proposal?' },
                { qid: 1, question: 'Has a full scoping exercise been carried out to define the data, processes, buildings, teams and system to be shared, including ensuring the minimum to be shared is actually sustainable? '},				
                { qid: 2, question: 'Is the new operating model for sharing services clear in terms of integrated management functions and changed responsibilities where activities are shared?' },				
                { qid: 3, question: 'Is there an agreed legal basis for operation?'},			
                { qid: 4, question: 'Has a gap analysis been undertaken to identify the extent of existing alignment or differences?'},     
                { qid: 5, question: 'Has it been determined (and agreed for each party) what benefits the shared services will target, so that decision can be made around what IT (for example) needs to be integrated/retired/retained to attain those benefits?' },				
				        { qid: 6, question: 'Is there a clear definition of WHY sharing is beneficial (e.g. capacity, economies of scale, savings, resilience, accelerating change, reducing risk, retaining skills, political demand etc). Note these may be specific and measurable or general aims.' }	
	        ]},
        { name: 'Political Backing', cid: 2,
          questions: [
              { qid: 0, question: "Has political backing been secured, including ensuring that political issues and concerns are identified and addressed (e.g. subcidiarity, local priorities, policy or governance matters)?"},
              { qid: 1, question: "Are politicians aware of the nature of the commitment in terms of resources, risks and shared priorities? Has this been made explicit in terms of posts to be lost? Will the plans have public visibility and are members briefed to explain this to constituents?" },
              { qid: 2, question: "How will decisions be made? Is integrated governance possible? If partners require significant degrees of independence a shared service is likely to be much more complex." },
              { qid: 3, question: "Has allowance been made to enable parties to walk away from the shared service? This is not the desired outcome, but an exit plan from the beginning and a fixed term planning horizon, rather than ‘life’, can avoid partners from feeling ‘trapped’." },
              { qid: 4, question: "Are there competing shared service projects (existing or planned) which will conflict or take priority?" },
          ]},
        { name: 'Agreeing where best practice lies', cid: 3,
            questions: [
               { qid: 0, question: "Has an analysis been undertaken of the various options for absorbing best practice from partners, integrating new models and retiring duplicated or sub-optimal systems/processes?" },
               { qid: 1, question: "Are principles in place to ensure that compromises are possible where needed in the interests of the wider ambitions of joint working?" }, 
               { qid: 2, question: "Has it been determined whether to merge “as is” operations or if there is a need to radically reform operations, to deliver the agreed outcomes?" },
               { qid: 3, question: "Has the ‘missed opportunity verses capacity for change’ argument been fully explored? (Note: This discussion should be had without allowing a short-term project to drive a shared service – e.g., a shared service should not a based on the coincidental need that two organisations must replace their finance system or similar.)" },
            ]},
     ]
  },
  { name: 'Ethos and Cultures',
    gid: 1,
    description: 'The extent to which the style of partnership working has been defined, to align cultures and behaviours and to ensure consistency in the approach to trust, openness, escalation and problem solving.',
      categories: [
        { name: 'Agreeing the principle',
          cid: 4,
            questions: [
                { qid: 0, question: 'Does the wider organisation understand and support the ambitions of each organisation?' },
                { qid: 1, question: 'Does everyone have a common understanding of the objectives of the programme: What success looks like?'},				
                { qid: 2, question: 'Is it accepted that middle-management responsibilities are likely to be impacted?'},				
                { qid: 3, question: 'Is there a post-delivery operating model based on an agreed enterprise architecture if required?'},			
                { qid: 4, question: 'Is there an agreed single staff communications plan?'}            
            ]},
          { name: 'Being a buyer or seller',
          cid: 5,
            questions: [
                { qid: 0, question: 'Have you determined who, when and where services will be delivered?' },
                { qid: 1, question: 'Are the ‘customer/supplier/partner’ terms understood where they are used?'},				
                { qid: 2, question: 'Unlike outsourcing, shared services is about sharing the benefits (e.g. of economies of scale). Is this understood in practice?'},				
                { qid: 3, question: 'Have you defined the basis for recharging and sharing costs? Will this be standard across multiple services or using different models per service area?'},			
                { qid: 4, question: 'Have you agreed who leads on delivery and avoided competing leadership?'}            
            ]},
        { name: 'Agreed branding and identity',
          cid: 6,
            questions: [
                { qid: 0, question: 'Has this been jointly agreed if necessary to show singularity of intent without compromising local distinctions where required?' },
                { qid: 1, question: 'Have affected staff and managers been involved in determining the identity and brand?'},				
                { qid: 2, question: 'Is the branding and identity appropriate – e.g. for the degree of commercialism and privatisation envisaged?'},				
                { qid: 3, question: 'Have practical issues involved with branding and identity be concidered – such as the email domain that the share service team will use, to avoid managing multiple mailboxes?'},			
                  
            ]},
              { name: 'IT and digital literacy levels',
          cid: 7,
            questions: [
                { qid: 0, question: 'Are the skills necessary for a digital delivery model, and likely to be necessary for sharing, in place for managers, staff and even suppliers?' },
                { qid: 1, question: 'Has there been a baseline assessment of the starting point of the skills in place? A shared service can be a vehicle for improvement, but it takes time, and baselining can avoid a shared service being perceived as cause of historical issues.'},				
                     
            ]},
            
      ]
  },
  { name: 'Treatment of Resources',
    gid: 2,
    description: 'The mechanisms and principles for sharing all resources – buildings, teams, time, money, IT – coupled with how benefits and costs will be apportioned transparently and fairly.',
      categories: [
        { name: 'Undertaking a gap analysis and baselining services',
          cid: 0,
            questions: [
                { qid: 0, question: 'Has a gap analysis been undertaken for each organisation, to identify differences in process, policy, systems, SLAs and where best practice lies today, where gaps exist that can be closed or where differences exist that must be treated as exceptions in the shared service programme?' },
                { qid: 1, question: 'Has there been a joint audit (resourced jointly) to baseline the current position in terms of performance and costs,ensuring the same standards and experience are shared across all organisations?'},				
                { qid: 2, question: 'Has capacity for change been considered – doing too much all at once can result in change fatigue, and has this been considered against existing commitments?'},				
            ]},
        { name: 'Agreeing the basis for sharing assets',
         cid: 1,
          questions: [
                { qid: 0, question: 'Have you agreed which assets will be shared – e.g. staff, buildings, IT, budgets? This would be both for the delivery of the shared service programme and also for the post implementation steady state operation. How will ownership of future assets be attributed? ' },
                { qid: 1, question: 'Has the basis for defining recharging and sharing costs been agreed in an open and transparent model? Is there a single agreed way to measure inputs and outputs?'},				
                { qid: 2, question: 'Has the impact of resource centralisation on the “losing” local economy and infrastructure been taken into account?' },				
                { qid: 3, question: 'Is the basis for acquiring new joint solutions agreed – such as shared cloud systems?'},			
           ]},
        { name: 'Agreed basis for sharing costs and benefits', cid: 2,
          questions: [
              { qid: 0, question: "Has a joint as well as an organisation-level business case(s) been prepared and agreed, to show that all parties benefit and joint working accrue mutual value?"},
              { qid: 1, question: "Is a mechanism agreed for sharing risk, reward and capital cost? Is a steady-state revenue sharing model in place and agreed?" },
             ]},
        { name: 'IT readiness assessment', cid: 3,
            questions: [
               { qid: 0, question: "Technology will be key to success. Has sufficient analysis work been carried out to assess capacity, competency of IT teams and their ability to work together with shared management if required to deliver joint outcomes? Has this been ‘baselined’ to understand the impact of the shared service once in place and avoid it being perceived as the cause of historical issues?" },
               { qid: 1, question: "Has a re-prioritising of IT activity and strategy taken place to promote the shared working programme so it does not simply join the end of the IT queue for expertise and support?  Does your programme governance ensure this or include penalties for failure (e.g. allowing other resources to be applied to a task at a cost rechargeable to the defaulting party)? Have existing local non-negotiable priorities been acknowledged by all parties?" }, 
               { qid: 2, question: "Are there any specific skills lacking – such as in areas of data management, authentication, security design and access management? Have you identified where these skills can be accessed with relevant rather than theoretical experience?" },
               { qid: 3, question: "Are there any specific skills lacking – such as in areas of data management, authentication, security design and access management? Have you identified where these skills can be accessed with relevant rather than theoretical experience?" },
               { qid: 4, question: "Are there legacy systems or infrastructure that will stop shared services?" },
            ]},
     ]
  },
  { name: 'Risk management',
    gid: 3,
    description: 'Every shared services programme carries risk, particularly in areas such as leadership, communications and technology. An assessment is needed of those risks, with appropriate management controls, ownership and mitigation, to minimise risk likelihood or impact, should risks materialise.',
     categories: [
        { name: 'Agreed communication plan',
          cid: 0,
            questions: [
                { qid: 0, question: 'Are there communications plans, channels and owners in place across the shared service organisations?' },
                { qid: 1, question: 'Are messages being planned systematically for groups and key decision/delivery points?'},				
                { qid: 2, question: 'Have priorities been communicated clearly (and therefore an understanding of what must be deferred or shelved)?'},
                { qid: 3, question: 'Does communication planning include all the key players in the programme – finance, IT, change leaders, end users, as well as HR and comms teams?'},
                { qid: 4, question: 'Has it been determined whether staff feedback will be kept separate or shared with other participant organisations? (Note: Risk of engendering hostility initially)'},				
            ]},
        { name: 'IT estate review and IT skills',
         cid: 1,
          questions: [
                { qid: 0, question: 'Has a review of the IT estate and contracts taken place to identify commonalities and gaps, especially where legacy IT reliance could be a risk to the programme?  How will cost/urgency of addressing underinvestment by one party be met where the new service will benefit both?' },
                { qid: 1, question: 'Has a systems and data review been undertaken to assess systems and data risks, especially where changes are being planned such as new systems and data importation? Has a common standard / approach for this been designed?'},				
                { qid: 2, question: 'Is there a specific plan for data and information – validation, testing quality, cleansing etc? Has a common data architecture been designed / has the need for this been recognised?' },				
                { qid: 3, question: 'Have access and security issues been worked through for teams who will be working together across organisations, both during and after the delivery of the shared service programme? Has compliance with external verifiers been confirmed? Have they been informed?'},			
                { qid: 4, question: 'Have external arrangements such as cloud and outsourcing contracts been considered as an opportunity or a risk to successful delivery?'},			
                { qid: 5, question: 'If there are different approaches to IT risk control on the partner organisations, has a plan been put in place to harmonise, including disaster recovery, security and employee empowerment? Has liability for error been planned for – i.e. the impact of an employee from one can cause on the other, during the transition?'},			
                { qid: 6, question: 'Have IT skills and capacity gaps been reviewed and resolved?'},			
           ]},
        { name: 'Contracts, and dependency on contracts and contractors', cid: 2,
          questions: [
              { qid: 0, question: "Has an asset review of all systems and external contracts been undertaken to identify dependency, including links between systems or on external services to make changes necessary for the shared services to work?"},
              { qid: 1, question: "Are there plans and owners in place to renegotiate key contracts where required to support the shared services? Has a statement been prepared (supported by precedents and the legal model agreed) which informs suppliers that they will effectively be dealing with a single entity and requires their acknowledgement?" },
              { qid: 2, question: "Whilst defined as a last resort, is there an agreed approach to managing exit arrangements should it become necessary?" },
              { qid: 3, question: "Is there capacity in house to absorb the extra work on shared services or is additional short-term transitional support needed, increasing costs of contractors and consultants? Has any claim of ability to absorb the extra work been challenged?" },
             ]},
        { name: 'Change management and other leadership competencies', cid: 3,
            questions: [
               { qid: 0, question: "Is there a sufficiently strong team in place in terms of experience and capacity in key areas such as finance, procurement and HR, supported by IT?" },
               { qid: 1, question: "Is there an effective and agreed change management plan in place, with change champions and visible senior leadership support?" }, 
               { qid: 2, question: "Has the potential impact of ‘change fatigue’ been considered?" },
               { qid: 3, question: "Are key IT change processes in place including system testing, design authority control and change control?" },
               { qid: 4, question: "Has the need to accept a degree of uncertainty, risk and the likelihood of some failure been recognised and agreed as a principle, with objective ways of dealing with problems?" },
               { qid: 5, question: "Is there a plan for how change messages will be linked in the partners’ corporate narrative? (It is usually important to personalise the narrative to each partner to avoid apparent ‘take-over’ concerns)" },
               { qid: 6, question: "Is the arrangement sustainable? The maintenance of the agreement should not depend on a few senior people, but to be able to sustain change of political or management leadership." },
            ]},
     ]
  },
  { name: 'Governance',
    gid: 4,
    description: 'Governance is key to success – how the shared service is run. There should be joint ownership of the programme (its risk, business case and key decisions) and the subsequent joint ownership of the shared services entity. Cooperation is needed, without trying to run the shared organisation by committee.',
     categories: [
        { name: 'Agreeing measures for success',
          cid: 0,
            questions: [
                { qid: 0, question: 'Are short-term and longer-term milestones in place, measurable and consistent with the business case going forward?' },
                { qid: 1, question: 'Are targets set relevant to each partner as well as the programme overall, with no inconsistencies or misalignment of ambition evident in the performance measures which have been selected?'},				
                { qid: 2, question: 'Are the key success factors real or assumed?  (i.e. “if we share services we are bound to save money”)'},				
            ]},
        { name: 'A leadership and decision model agreed',
         cid: 1,
          questions: [
                { qid: 0, question: 'A clear vision and strong leadership is essential for shared service success: Is there a single joint board in place (at a political level and officer level) tasked with the successful implementation of the shared service - together and in each organisation?' },
                { qid: 1, question: 'Has it been agreed which organisation will take the main lead for the programme - such as chairing boards (even if by service area) - to avoid competing leading ship and is this really understood and accepted? Not everyone can lead at the same time, yet this can create tensions.'},				
                { qid: 2, question: 'Is a mechanism for dealing with exceptions and problem escalation in place?' },				
                { qid: 3, question: 'Is there is a risk model in place, tracked by the joint governance board along with key milestone deliverables?'},			
                { qid: 4, question: 'Is there a mechanism for prioritisation in place and shared across the sharing organisations so that the shared service programme has the priority it needs at all times?'},			
                { qid: 5, question: 'Is there a plan in place and agreed for post-implementation benefits realisation in each organisation?'},			
                { qid: 6, question: 'Is it entirely clear where accountability for success and failure lies, whilst ensuring that success is independent of key individuals?'},			
                { qid: 7, question: 'Is there a common methodology for the project in place – PMO, agile methods, testing, scrutiny, political involvement?'},			
                { qid: 8, question: 'Are all the necessary change leadership roles defined and in place (dedicated where necessary), on a single team sheet, agreed with all parties?'},			
           ]},
        { name: 'Change programme design and agreement', cid: 2,
          questions: [
              { qid: 0, question: "Is there a full change programme in place and agreed by the joint board, including costs, business case, delivery plan, post-completion benefits reporting and the relevant components of that plan (HR, communications, risk management, finance, IT etc)?"},
              { qid: 1, question: "Has a timescale for transition been agreed at the start, that is not too long but realistic in terms of what needs to be done?" },
              { qid: 2, question: "Does the change programme structure and approach meet the highest standards of the contributing organisations (not dumbing down)? Are independent auditors satisfied and able to periodically review?" },
              { qid: 3, question: "Does the programme accounting arrangement have sufficient depth and oversight to produce reliable data eliminating double counting of benefits by the programme workstreams and individual participants?" },
             ]},
        { name: 'Legal base for joint working', cid: 3,
            questions: [
               { qid: 0, question: "Is there a shared portfolio in place on which a legal contract can be defined?" },
               { qid: 1, question: "Has a suitable legal basis been selected, agreed and signed for the shared service and trading, including links to other contracts, sharing of costs and savings and governance?" }, 
               { qid: 2, question: "Is the legal basis agreed and formalised in an operating board with clear accountabilities?" },
            ]},
     ]
  },
];

// const ALL_ITEMS = CONFIG.reduce((result, category) => result.concat(category.items), []);

@Injectable()
export class QuestionConfig {
  getConfig() {
    return CONFIG;
  }  
}
