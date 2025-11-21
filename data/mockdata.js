<!-- FILE: data/mockdata.js -->
// Mock data for modules
const MOCK = {
  user: {name:'J. Galla', initials:'JG', klass:10, stream:'Science', phone:'+91 6301186741'},
  subjects: [
    {id:'maths',title:'Mathematics',desc:'Numbers, Algebra, Geometry'},
    {id:'physics',title:'Physics',desc:'Light, Heat, Electricity'},
    {id:'chem',title:'Chemistry',desc:'Matter, Reactions'},
    {id:'bio',title:'Biology',desc:'Life & Living'},
    {id:'english',title:'English',desc:'Grammar & Comprehension'},
    {id:'sst',title:'Social Studies',desc:'History & Civics'}
  ],
  courses: [
    {id:'c6',title:'Class 6 IIT Foundation',meta:'Complete foundation course'},
    {id:'c9',title:'Class 9 Olympiad Prep',meta:'Maths intensive'}
  ],
  tests: [
    {id:'t1',title:'Maths Weekly Test',date:'2025-11-01',score:78},
    {id:'t2',title:'Physics Unit Test',date:'2025-10-20',score:85}
  ],
  materials: [
    {id:'m1',title:'Light - Notes',subject:'physics'},
    {id:'m2',title:'Algebra Practice',subject:'maths'}
  ],
  assignments: [
    {id:'a1',title:'Chapter 4 Problems',due:'2025-11-25',subject:'maths'}
  ],
  notifications: [
    {id:'n1',text:'New material uploaded - Algebra'},
    {id:'n2',text:'Test result published - Maths Weekly Test'}
  ],
  recent: [
    'Scored 78% in Maths Weekly Test',
    'New material uploaded: Light - Notes'
  ],
  progress: {overall:72,testsTaken:6}
};
