import { useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const raw = [
  {id:2,g:"M",edu:"ปริญญาตรี",job:"ช่างเทคนิค CCTV",rdy:true,pic:false,dob:"1983-06-03",cr:"2026-03-01",nm:"สุชาติ เจริญขุน"},
  {id:4,g:"F",edu:"ปริญญาตรี",job:"รปภ.",rdy:true,pic:true,dob:"1998-08-28",cr:"2026-03-01",nm:"ณภัชชา แซ่เลี้ยว"},
  {id:5,g:"M",edu:"ปริญญาตรี",job:"รปภ.",rdy:true,pic:true,dob:"1971-05-17",cr:"2026-03-01",nm:"มานพ ใจเสน"},
  {id:7,g:"F",edu:"ม.3",job:"รปภ.",rdy:true,pic:true,dob:"1972-12-05",cr:"2026-03-01",nm:"สุปรียา ธงสิบสอง"},
  {id:8,g:"M",edu:"ม.6",job:"หัวหน้าชุด",rdy:true,pic:true,dob:"1983-01-25",cr:"2026-03-01",nm:"ปรัชญา บุญเกษ"},
  {id:9,g:"M",edu:"ม.3",job:"รปภ.",rdy:true,pic:true,dob:"1985-01-30",cr:"2026-03-01",nm:"เอกรัตน์ กันสุข"},
  {id:10,g:"F",edu:"ม.6",job:"รปภ.",rdy:true,pic:false,dob:"1997-09-21",cr:"2026-03-01",nm:"นฤมล จันทร์หนองหว้า"},
  {id:11,g:"F",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1997-05-28",cr:"2026-03-01",nm:"ศิริวรรณ ยอดมงคล"},
  {id:12,g:"M",edu:"ม.6",job:"อื่นๆ",rdy:true,pic:false,dob:"1967-01-22",cr:"2026-03-01",nm:"ประพนธ์ เพ็ชร์ศรีฟ้า"},
  {id:13,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ.",rdy:true,pic:true,dob:"1959-08-21",cr:"2026-03-01",nm:"ช้วน สร้อยพูล"},
  {id:14,g:"F",edu:"ม.3",job:"รปภ.",rdy:true,pic:false,dob:"1980-09-21",cr:"2026-03-01",nm:"ปวีณา สอนโพธิ์"},
  {id:15,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1973-07-02",cr:"2026-03-01",nm:"พัฒนพงษ์ บรรจงเบญญาพล"},
  {id:16,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1967-01-28",cr:"2026-03-01",nm:"ทองภากร กลิ่นปลี"},
  {id:17,g:"M",edu:"ม.3",job:"รปภ.",rdy:true,pic:true,dob:"1995-06-15",cr:"2026-03-01",nm:"บุญตา แก้วลี"},
  {id:18,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:false,pic:true,dob:"2006-08-27",cr:"2026-03-01",nm:"อิทธิกร ชานนันโท"},
  {id:19,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ.",rdy:true,pic:true,dob:"1981-04-15",cr:"2026-03-01",nm:"สมศักดิ์ วงษ์สาหาราช"},
  {id:20,g:"M",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:false,pic:true,dob:"1977-06-08",cr:"2026-03-01",nm:"วีระ นักใจธรรม"},
  {id:21,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:false,pic:true,dob:"1986-07-07",cr:"2026-03-01",nm:"คมสันต์ นาศรี"},
  {id:22,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"2004-06-06",cr:"2026-03-01",nm:"วันวิสา คำมะลิ"},
  {id:23,g:"F",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:false,pic:false,dob:"1975-11-19",cr:"2026-03-01",nm:"วงเดือน อักษร"},
  {id:24,g:"F",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1980-05-16",cr:"2026-03-01",nm:"อ้อยใจ เกษศร"},
  {id:25,g:"M",edu:"ม.3",job:"รปภ.",rdy:true,pic:true,dob:"2005-10-02",cr:"2026-03-01",nm:"เกื้อพล บุญครอบ"},
  {id:26,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1977-06-29",cr:"2026-03-01",nm:"เสกสรร ไชยแรง"},
  {id:27,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ.",rdy:true,pic:true,dob:"1966-04-11",cr:"2026-03-01",nm:"อำพร บวรศักดิ์"},
  {id:28,g:"M",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:false,pic:true,dob:"1999-11-10",cr:"2026-03-01",nm:"ภาคิน พิมทา"},
  {id:29,g:"M",edu:"ม.3",job:"รปภ.",rdy:true,pic:true,dob:"1963-04-22",cr:"2026-03-01",nm:"สมบูรณ์ ศิริบูรณ์"},
  {id:30,g:"M",edu:"ต่ำกว่าม.3",job:"หัวหน้าชุด",rdy:false,pic:true,dob:"1977-08-22",cr:"2026-03-01",nm:"รังสิต พาชื่น"},
  {id:31,g:"M",edu:"ต่ำกว่าม.3",job:"หัวหน้าชุด",rdy:false,pic:true,dob:"1983-09-28",cr:"2026-03-01",nm:"พิพัฒน์ โคสพ"},
  {id:32,g:"F",edu:"ปวช",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1981-03-16",cr:"2026-03-01",nm:"ยิ่งยศ ต้นทอง"},
  {id:33,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:false,pic:false,dob:"1969-04-21",cr:"2026-03-01",nm:"กนกวรรณ ประสารวงศ"},
  {id:34,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:false,pic:false,dob:"1966-09-15",cr:"2026-03-01",nm:"บุญชู ช้างนอ้ย"},
  {id:35,g:"M",edu:"ม.6",job:"รปภ.",rdy:true,pic:false,dob:"1970-04-13",cr:"2026-03-01",nm:"บุญเลิศ พันธุระ"},
  {id:36,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1971-06-17",cr:"2026-03-01",nm:"บุตรดี หิมคุณ"},
  {id:37,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:false,pic:false,dob:"1971-02-01",cr:"2026-03-01",nm:"วันชัย เวชหามา"},
  {id:38,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:false,pic:true,dob:"2005-09-11",cr:"2026-03-01",nm:"อิลฮาม มาเฮง"},
  {id:39,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"2004-03-11",cr:"2026-03-01",nm:"สูไรดา วาเฮง"},
  {id:40,g:"M",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"2001-01-17",cr:"2026-03-01",nm:"อานนท์ ป้องกัน"},
  {id:41,g:"F",edu:"ม.3",job:"หัวหน้าชุด",rdy:true,pic:false,dob:"1985-03-15",cr:"2026-03-01",nm:"วาสนา สวัสดิ์ราช"},
  {id:42,g:"F",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1969-01-27",cr:"2026-03-01",nm:"สม สร้อยจิต"},
  {id:43,g:"M",edu:"ปวช",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"2003-07-11",cr:"2026-03-01",nm:"ธีรภัทร์ พันธสิม"},
  {id:44,g:"F",edu:"ม.3",job:"หัวหน้าชุด",rdy:false,pic:true,dob:"1980-12-21",cr:"2026-03-01",nm:"กานดา แสงดาว"},
  {id:45,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"2008-02-06",cr:"2026-03-01",nm:"มานะ เพียรเเก้ว"},
  {id:46,g:"M",edu:"ม.3",job:"หัวหน้าชุด",rdy:false,pic:true,dob:"1972-10-30",cr:"2026-03-01",nm:"ธวัชชัย ศรีชัยมูล"},
  {id:47,g:"M",edu:"ม.3",job:"หัวหน้าชุด",rdy:true,pic:false,dob:"1965-10-20",cr:"2026-03-01",nm:"วิชิต ทวีกิจกุศล"},
  {id:48,g:"F",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"2006-12-31",cr:"2026-03-01",nm:"อุไรวรรณ สุวรรณมณี"},
  {id:49,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1981-12-06",cr:"2026-03-01",nm:"มลิวัลย์ ปาติตัง"},
  {id:50,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"2008-02-09",cr:"2026-03-01",nm:"ณรงค์ พรามไธสง"},
  {id:51,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1994-07-23",cr:"2026-03-01",nm:"สุพรรษา ยินดีขันธ์"},
  {id:52,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:false,pic:false,dob:"1980-03-19",cr:"2026-03-01",nm:"จําเนืยร ชนะพาห์"},
  {id:53,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1999-09-06",cr:"2026-03-01",nm:"อรอมล คชทิพ"},
  {id:54,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1999-08-30",cr:"2026-03-01",nm:"อะหมัดอาริเฟน บินรัตแก้ว"},
  {id:55,g:"F",edu:"ปวช",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"2004-07-12",cr:"2026-03-01",nm:"มีสวัสดิ์ ศรีนนเรือง"},
  {id:56,g:"M",edu:"ม.3",job:"หัวหน้าชุด",rdy:false,pic:true,dob:"1977-07-28",cr:"2026-03-01",nm:"สมาน สมศรี"},
  {id:57,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1976-04-15",cr:"2026-03-01",nm:"พรชัย แก้วอุดร"},
  {id:58,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:false,pic:true,dob:"1987-05-02",cr:"2026-03-01",nm:"สุพรรษา เจริญสุข"},
  {id:59,g:"M",edu:"ม.3",job:"รปภ.",rdy:true,pic:false,dob:"1993-05-02",cr:"2026-03-01",nm:"ธีระวัฒน์ ตอรบรัมย์"},
  {id:60,g:"M",edu:"ม.3",job:"รปภ.",rdy:true,pic:true,dob:"1989-11-28",cr:"2026-03-01",nm:"นิรพันธ์ ศรีครัง"},
  {id:61,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"2000-11-04",cr:"2026-03-01",nm:"มลทัย ชุมนวล"},
  {id:62,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1974-10-01",cr:"2026-03-01",nm:"ทองศรี ชุมนวล"},
  {id:63,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ.",rdy:true,pic:true,dob:"2003-05-22",cr:"2026-03-01",nm:"สรวิศ น้อยหัวหาด"},
  {id:64,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1973-09-20",cr:"2026-03-01",nm:"ไพโรจน์ เภตรา"},
  {id:65,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1991-12-07",cr:"2026-03-01",nm:"ณัฐพล แดงเผ่า"},
  {id:66,g:"M",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"2005-05-29",cr:"2026-03-01",nm:"กิตติพัฒน์ สวัสดิ์ราช"},
  {id:67,g:"M",edu:"ปวส",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1964-11-05",cr:"2026-03-01",nm:"สิริพงษ์ พิริยะปัณญา"},
  {id:68,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1999-10-12",cr:"2026-03-01",nm:"วีระวัฒน์ เกตุพันธ์"},
  {id:69,g:"M",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1969-11-16",cr:"2026-03-01",nm:"สุระพงษ์ ฝ่ายรีย์"},
  {id:70,g:"M",edu:"ต่ำกว่าม.3",job:"หัวหน้าชุด",rdy:true,pic:true,dob:"1971-05-19",cr:"2026-03-01",nm:"สะอาด แตงแจ้ง"},
  {id:71,g:"M",edu:"ม.3",job:"หัวหน้าชุด",rdy:true,pic:true,dob:"1967-04-28",cr:"2026-03-01",nm:"เจริญ แย้มสายหยุด"},
  {id:72,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:false,pic:true,dob:"1971-10-06",cr:"2026-03-01",nm:"สุกรี พลไชยขา"},
  {id:73,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"2008-02-09",cr:"2026-03-02",nm:"เกษร พรมโคตร"},
  {id:74,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"2004-10-27",cr:"2026-03-02",nm:"อัสมะห์ แลนง"},
  {id:75,g:"F",edu:"ปริญญาตรี",job:"อื่นๆ",rdy:true,pic:true,dob:"1994-09-17",cr:"2026-03-02",nm:"จิรัฐติกาล กันสุยะ"},
  {id:76,g:"M",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:false,pic:true,dob:"2005-03-26",cr:"2026-03-02",nm:"นครินทร์ เทียนศรี"},
  {id:77,g:"M",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1963-07-03",cr:"2026-03-02",nm:"สมพร พงศ์สวัสดิ์"},
  {id:78,g:"F",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1982-09-16",cr:"2026-03-02",nm:"ราตรี เพ็งศรี"},
  {id:79,g:"M",edu:"ปริญญาตรี",job:"อื่นๆ",rdy:false,pic:false,dob:"2006-09-11",cr:"2026-03-03",nm:"ทศวรรษ กลิ่นเงิน"},
  {id:80,g:"M",edu:"ปริญญาตรี",job:"อื่นๆ",rdy:false,pic:false,dob:"2006-07-23",cr:"2026-03-03",nm:"รชต แหวนสูงเนิน"},
  {id:81,g:"M",edu:"ม.6",job:"หัวหน้าชุด",rdy:true,pic:true,dob:"1973-04-22",cr:"2026-03-03",nm:"แหลม แพเกาะ"},
  {id:82,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1981-05-26",cr:"2026-03-04",nm:"จารุณี จันทร์เพ็ญ"},
  {id:83,g:"M",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1988-09-08",cr:"2026-03-04",nm:"ศักดิ์ชาย คงเรือง"},
  {id:84,g:"M",edu:"ปวส",job:"ไฟร์แมน",rdy:true,pic:false,dob:"2000-03-26",cr:"2026-03-05",nm:"ธนากร เภาโพธิ์"},
  {id:85,g:"F",edu:"ปริญญาตรี",job:"อื่นๆ",rdy:false,pic:false,dob:"1993-04-23",cr:"2026-03-05",nm:"ณัฐธิดา แซ่เอง"},
  {id:86,g:"F",edu:"ม.6",job:"อื่นๆ",rdy:true,pic:true,dob:"1992-05-15",cr:"2026-03-05",nm:"จุฬาสิณี โพธิ์สุขเกษม"},
  {id:87,g:"F",edu:"ปริญญาตรี",job:"รปภ.",rdy:true,pic:true,dob:"1981-09-28",cr:"2026-03-05",nm:"นันท์นภัส เทวีพันธ์"},
  {id:88,g:"M",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:true,dob:"1998-03-01",cr:"2026-03-05",nm:"อาทิตย์ สุขวิสัย"},
  {id:89,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1974-08-14",cr:"2026-03-05",nm:"อิต ชะหล้า"},
  {id:90,g:"F",edu:"ม.3",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"1984-02-15",cr:"2026-03-05",nm:"สุวรรณี แก้วกุลธง"},
  {id:91,g:"M",edu:"ม.6",job:"หัวหน้าชุด",rdy:true,pic:false,dob:"1998-10-02",cr:"2026-03-05",nm:"ภูวดล พุ่มจันทร์"},
  {id:92,g:"M",edu:"ปริญญาตรี",job:"ช่างเทคนิค CCTV",rdy:true,pic:false,dob:"1997-04-06",cr:"2026-03-05",nm:"จักรี ยานุ"},
  {id:93,g:"M",edu:"ต่ำกว่าม.3",job:"รปภ. ลูกชุด",rdy:false,pic:false,dob:"1984-11-29",cr:"2026-03-05",nm:"อนันต์ ชื่นอารมณ์"},
  {id:94,g:"F",edu:"ม.6",job:"รปภ. ลูกชุด",rdy:true,pic:false,dob:"2003-06-04",cr:"2026-03-05",nm:"ดาริณี เสือพิมพ์พร"},
  {id:95,g:"M",edu:"ปริญญาตรี",job:"ช่างเทคนิค CCTV",rdy:false,pic:false,dob:"1995-08-06",cr:"2026-03-05",nm:"เกียรติศักดิ์ มาลา"},
  {id:96,g:"F",edu:"ม.3",job:"อื่นๆ",rdy:true,pic:false,dob:"1994-10-18",cr:"2026-03-07",nm:"บุญนภา สุทันทะกุล"},
  {id:97,g:"M",edu:"ต่ำกว่าม.3",job:"หัวหน้าชุด",rdy:true,pic:false,dob:"1990-09-09",cr:"2026-03-08",nm:"ยอดชาย กุมแก้ว"},
  {id:98,g:"M",edu:"ม.6",job:"หัวหน้าชุด",rdy:true,pic:false,dob:"1999-02-17",cr:"2026-03-08",nm:"คม นิโครธานนท์"},
];

const col={bg:"#fafbfc",card:"#ffffff",border:"#e8ecf0",text:"#1a2332",sub:"#6b7a8d",accent:"#2563eb",yellow:"#f59e0b",green:"#10b981",red:"#ef4444",purple:"#8b5cf6"};
const getAge=d=>{if(!d)return null;const p=d.split("-"),b=new Date(+p[0],+p[1]-1,+p[2]),n=new Date("2026-03-09");let a=n.getFullYear()-b.getFullYear();if(n.getMonth()<b.getMonth()||(n.getMonth()===b.getMonth()&&n.getDate()<b.getDate()))a--;return a;};
const ageGrp=a=>a<25?"18-24":a<35?"25-34":a<45?"35-44":a<55?"45-54":a<65?"55-64":"65+";
const ct=(a,f)=>a.filter(f).length;
const grp=(a,f)=>{const m={};a.forEach(x=>{const k=f(x);if(k!=null)m[k]=(m[k]||0)+1;});return m;};

const Pill=({children,color})=><span style={{display:"inline-block",padding:"2px 10px",borderRadius:20,fontSize:11,fontWeight:600,background:color+"18",color}}>{children}</span>;
const Metric=({label,value,sub,accent})=>(
  <div style={{flex:"1 1 130px",minWidth:120}}>
    <div style={{fontSize:11,color:col.sub,fontWeight:500,marginBottom:3,letterSpacing:"0.03em",textTransform:"uppercase"}}>{label}</div>
    <div style={{fontSize:26,fontWeight:700,color:accent||col.text,lineHeight:1.1}}>{value}</div>
    {sub&&<div style={{fontSize:11,color:col.sub,marginTop:2}}>{sub}</div>}
  </div>
);
const Card=({title,children,span})=>(
  <div style={{background:col.card,borderRadius:14,padding:"18px 20px",border:`1px solid ${col.border}`,flex:span?"1 1 100%":"1 1 310px",minWidth:270,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
    {title&&<div style={{fontSize:13,fontWeight:650,color:col.text,marginBottom:12}}>{title}</div>}
    {children}
  </div>
);
const MiniBar=({label,val,max,color,showPct})=>(
  <div style={{marginBottom:9}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
      <span style={{fontSize:12,color:col.text}}>{label}</span>
      <span style={{fontSize:12,fontWeight:600,color:color||col.accent}}>{val}{showPct&&max>0&&<span style={{color:col.sub,fontWeight:400}}> ({((val/max)*100).toFixed(0)}%)</span>}</span>
    </div>
    <div style={{height:5,background:"#f0f2f5",borderRadius:3,overflow:"hidden"}}>
      <div style={{height:"100%",width:max>0?`${(val/max)*100}%`:"0%",background:color||col.accent,borderRadius:3,transition:"width .4s"}}/>
    </div>
  </div>
);
const RADIAN=Math.PI/180;
const PieLabel=({cx,cy,midAngle,outerRadius,percent,name})=>{if(percent<0.05)return null;const r=outerRadius+20,x=cx+r*Math.cos(-midAngle*RADIAN),y=cy+r*Math.sin(-midAngle*RADIAN);return <text x={x} y={y} fill={col.sub} textAnchor={x>cx?"start":"end"} dominantBaseline="central" fontSize={11} fontWeight={500}>{name} {(percent*100).toFixed(0)}%</text>;};
const CTip=({active,payload})=>{if(!active||!payload?.length)return null;return <div style={{background:col.text,color:"#fff",padding:"6px 12px",borderRadius:8,fontSize:12,boxShadow:"0 4px 12px rgba(0,0,0,.15)"}}><div style={{fontWeight:600}}>{payload[0].name||payload[0].payload?.name}</div><div>{payload[0].value} candidates</div></div>;};

export default function Dashboard(){
  const [tab,setTab]=useState("overview");
  const D=raw,tot=D.length,male=ct(D,c=>c.g==="M"),female=ct(D,c=>c.g==="F");
  const rdy=ct(D,c=>c.rdy),pic=ct(D,c=>c.pic);
  const ages=D.map(c=>getAge(c.dob)).filter(a=>a!=null&&a>0&&a<100);
  const avgAge=ages.length?(ages.reduce((a,b)=>a+b,0)/ages.length).toFixed(0):"—";
  const minA=ages.length?Math.min(...ages):"—",maxA=ages.length?Math.max(...ages):"—";

  const genderD=[{name:"Male (ชาย)",value:male},{name:"Female (หญิง)",value:female}];
  const eduOrd=["ปริญญาตรี","ปวส","ปวช","ม.6","ม.3","ต่ำกว่าม.3"];
  const eduG=grp(D,c=>c.edu);const eduD=eduOrd.map(e=>({name:e,value:eduG[e]||0})).filter(e=>e.value>0);
  const jobG=grp(D,c=>c.job);const jobD=Object.entries(jobG).sort((a,b)=>b[1]-a[1]).map(([n,v])=>({name:n,value:v}));
  const readyD=[{name:"Ready",value:rdy},{name:"Passive",value:tot-rdy}];
  const picD=[{name:"Has Photo",value:pic},{name:"No Photo",value:tot-pic}];
  const ageGrpD=(()=>{const g=grp(ages,a=>ageGrp(a));return["18-24","25-34","35-44","45-54","55-64","65+"].map(k=>({name:k,value:g[k]||0}));})();
  const maleRdy=ct(D,c=>c.g==="M"&&c.rdy),femaleRdy=ct(D,c=>c.g==="F"&&c.rdy);
  const noPicRdy=ct(D,c=>c.rdy&&!c.pic),noPicList=D.filter(c=>!c.pic);

  const regG=grp(D,c=>c.cr);const regDates=Object.entries(regG).sort((a,b)=>a[0].localeCompare(b[0]));
  let cum=0;const regTL=regDates.map(([d,v])=>{cum+=v;return{name:d.substring(5),daily:v,total:cum};});

  const tabs=[{k:"overview",l:"Overview"},{k:"people",l:"Demographics"},{k:"quality",l:"Profile Quality"},{k:"timeline",l:"Registration"}];

  return(
    <div style={{background:col.bg,minHeight:"100vh",fontFamily:"'Inter',-apple-system,system-ui,sans-serif",color:col.text}}>
      <div style={{maxWidth:980,margin:"0 auto",padding:"24px 18px 56px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:32,height:32,borderRadius:8,background:`linear-gradient(135deg,${col.accent},${col.yellow})`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:14}}>M</div>
            <div>
              <div style={{fontSize:17,fontWeight:700}}>Madeekub Dashboard</div>
              <div style={{fontSize:11,color:col.sub}}>POC Phase — {tot} Candidates · March 2026</div>
            </div>
          </div>
          <div style={{display:"flex",gap:2,background:"#f0f2f5",borderRadius:10,padding:3}}>
            {tabs.map(t=><button key={t.k} onClick={()=>setTab(t.k)} style={{padding:"6px 14px",borderRadius:8,border:"none",cursor:"pointer",fontSize:12,fontWeight:600,background:tab===t.k?"#fff":"transparent",color:tab===t.k?col.text:col.sub,boxShadow:tab===t.k?"0 1px 3px rgba(0,0,0,.08)":"none",transition:"all .15s"}}>{t.l}</button>)}
          </div>
        </div>

        {tab==="overview"&&<>
          <div style={{display:"flex",flexWrap:"wrap",gap:14,marginBottom:20,background:col.card,borderRadius:14,padding:"18px 22px",border:`1px solid ${col.border}`,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
            <Metric label="Total" value={tot} accent={col.accent}/>
            <Metric label="Male / Female" value={`${male} / ${female}`} sub={`${((male/tot)*100).toFixed(0)}% / ${((female/tot)*100).toFixed(0)}%`}/>
            <Metric label="Ready" value={rdy} sub={`${((rdy/tot)*100).toFixed(0)}%`} accent={col.green}/>
            <Metric label="Avg Age" value={avgAge}/>
            <Metric label="Photo" value={`${((pic/tot)*100).toFixed(0)}%`} sub={`${pic} of ${tot}`} accent={pic/tot>.6?col.green:col.yellow}/>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:14}}>
            <Card title="Gender"><ResponsiveContainer width="100%" height={190}><PieChart><Pie data={genderD} cx="50%" cy="50%" innerRadius={46} outerRadius={70} dataKey="value" labelLine={false} label={PieLabel} strokeWidth={2} stroke={col.card}><Cell fill={col.accent}/><Cell fill={col.yellow}/></Pie><Tooltip content={<CTip/>}/></PieChart></ResponsiveContainer></Card>
            <Card title="Current Position"><ResponsiveContainer width="100%" height={Math.max(190,jobD.length*26)}><BarChart data={jobD} layout="vertical" margin={{left:110,right:16}}><XAxis type="number" hide/><YAxis type="category" dataKey="name" tick={{fill:col.text,fontSize:11}} axisLine={false} tickLine={false} width={110}/><Tooltip content={<CTip/>}/><Bar dataKey="value" fill={col.accent} radius={[0,5,5,0]} barSize={14}/></BarChart></ResponsiveContainer></Card>
            <Card title="Education Level"><ResponsiveContainer width="100%" height={Math.max(190,eduD.length*30)}><BarChart data={eduD} layout="vertical" margin={{left:80,right:16}}><XAxis type="number" hide/><YAxis type="category" dataKey="name" tick={{fill:col.text,fontSize:11}} axisLine={false} tickLine={false} width={80}/><Tooltip content={<CTip/>}/><Bar dataKey="value" fill={col.purple} radius={[0,5,5,0]} barSize={14}/></BarChart></ResponsiveContainer></Card>
            <Card title="Job Readiness"><ResponsiveContainer width="100%" height={190}><PieChart><Pie data={readyD} cx="50%" cy="50%" innerRadius={46} outerRadius={70} dataKey="value" labelLine={false} label={PieLabel} strokeWidth={2} stroke={col.card}><Cell fill={col.green}/><Cell fill="#d1d5db"/></Pie><Tooltip content={<CTip/>}/></PieChart></ResponsiveContainer></Card>
          </div>
        </>}

        {tab==="people"&&<>
          <div style={{display:"flex",flexWrap:"wrap",gap:14,marginBottom:20,background:col.card,borderRadius:14,padding:"18px 22px",border:`1px solid ${col.border}`,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
            <Metric label="Avg Age" value={avgAge} accent={col.accent}/>
            <Metric label="Youngest" value={minA} accent={col.green}/>
            <Metric label="Oldest" value={maxA} accent={col.yellow}/>
            <Metric label="Male Ready" value={`${male>0?((maleRdy/male)*100).toFixed(0):0}%`} sub={`${maleRdy}/${male}`}/>
            <Metric label="Female Ready" value={`${female>0?((femaleRdy/female)*100).toFixed(0):0}%`} sub={`${femaleRdy}/${female}`}/>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:14}}>
            <Card title="Age Distribution" span><ResponsiveContainer width="100%" height={200}><BarChart data={ageGrpD} margin={{left:0,right:0,top:6,bottom:0}}><XAxis dataKey="name" tick={{fill:col.sub,fontSize:11}} axisLine={false} tickLine={false}/><YAxis hide/><Tooltip content={<CTip/>}/><Bar dataKey="value" fill={col.accent} radius={[6,6,0,0]} barSize={36}/></BarChart></ResponsiveContainer></Card>
            <Card title="Education by Gender">
              {eduOrd.map(e=>{const m=ct(D,c=>c.edu===e&&c.g==="M"),f=ct(D,c=>c.edu===e&&c.g==="F"),t=m+f;if(!t)return null;return<div key={e} style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}><div style={{width:75,fontSize:11,color:col.sub,textAlign:"right",flexShrink:0}}>{e}</div><div style={{flex:1,display:"flex",height:14,borderRadius:3,overflow:"hidden",background:"#f0f2f5"}}>{m>0&&<div style={{width:`${(m/tot)*100*4}%`,minWidth:16,background:col.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#fff",fontWeight:600}}>{m}</div>}{f>0&&<div style={{width:`${(f/tot)*100*4}%`,minWidth:16,background:col.yellow,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#fff",fontWeight:600}}>{f}</div>}</div></div>;})}
              <div style={{display:"flex",gap:14,marginTop:8,fontSize:11,color:col.sub}}><span><span style={{display:"inline-block",width:8,height:8,borderRadius:2,background:col.accent,marginRight:4}}/>Male</span><span><span style={{display:"inline-block",width:8,height:8,borderRadius:2,background:col.yellow,marginRight:4}}/>Female</span></div>
            </Card>
            <Card title="Readiness by Gender">
              <MiniBar label="Male — Ready" val={maleRdy} max={male} color={col.accent} showPct/>
              <MiniBar label="Male — Passive" val={male-maleRdy} max={male} color="#94a3b8" showPct/>
              <div style={{height:6}}/>
              <MiniBar label="Female — Ready" val={femaleRdy} max={female} color={col.yellow} showPct/>
              <MiniBar label="Female — Passive" val={female-femaleRdy} max={female} color="#94a3b8" showPct/>
            </Card>
          </div>
        </>}

        {tab==="quality"&&<>
          <div style={{display:"flex",flexWrap:"wrap",gap:14,marginBottom:20,background:col.card,borderRadius:14,padding:"18px 22px",border:`1px solid ${col.border}`,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
            <Metric label="With Photo" value={pic} sub={`${((pic/tot)*100).toFixed(0)}%`} accent={col.green}/>
            <Metric label="No Photo" value={tot-pic} sub="need follow-up" accent={col.red}/>
            <Metric label="Ready + Photo" value={ct(D,c=>c.rdy&&c.pic)} sub="fully complete" accent={col.accent}/>
            <Metric label="Ready, No Photo" value={noPicRdy} sub="high priority" accent={col.yellow}/>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:14}}>
            <Card title="Photo Upload Rate"><ResponsiveContainer width="100%" height={190}><PieChart><Pie data={picD} cx="50%" cy="50%" innerRadius={46} outerRadius={70} dataKey="value" labelLine={false} label={PieLabel} strokeWidth={2} stroke={col.card}><Cell fill={col.green}/><Cell fill="#e5e7eb"/></Pie><Tooltip content={<CTip/>}/></PieChart></ResponsiveContainer></Card>
            <Card title="Completeness by Readiness">
              {[{l:"Ready to Work",d:D.filter(c=>c.rdy),c:col.green},{l:"Passive",d:D.filter(c=>!c.rdy),c:"#94a3b8"}].map((s,i)=>{const wp=ct(s.d,c=>c.pic),pct=s.d.length?((wp/s.d.length)*100).toFixed(0):0;return<div key={i} style={{marginBottom:14}}><div style={{fontSize:12,fontWeight:600,color:s.c,marginBottom:5}}>{s.l} <span style={{fontWeight:400,color:col.sub}}>({s.d.length})</span></div><MiniBar label="Has photo" val={wp} max={s.d.length} color={s.c} showPct/></div>;})}
            </Card>
            <Card title="Missing Photo — Follow-up List" span>
              <div style={{maxHeight:280,overflowY:"auto"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:6}}>
                {noPicList.map(c=><div key={c.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 12px",background:"#f8f9fb",borderRadius:8,border:"1px solid #eef0f3"}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:col.sub,fontWeight:600}}>?</div><div><div style={{fontSize:11,fontWeight:600,color:col.text}}>{c.nm}</div><div style={{fontSize:10,color:col.sub}}>{c.job}</div></div></div><Pill color={c.rdy?col.green:col.sub}>{c.rdy?"Ready":"Passive"}</Pill></div>)}
              </div></div>
            </Card>
          </div>
        </>}

        {tab==="timeline"&&<>
          <div style={{display:"flex",flexWrap:"wrap",gap:14,marginBottom:20,background:col.card,borderRadius:14,padding:"18px 22px",border:`1px solid ${col.border}`,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
            <Metric label="Total Registered" value={tot} accent={col.accent}/>
            <Metric label="Active Days" value={regDates.length}/>
            <Metric label="Avg / Day" value={regDates.length?(tot/regDates.length).toFixed(1):"—"} sub="candidates per day"/>
            <Metric label="Peak Day" value={regDates.length?Math.max(...regDates.map(d=>d[1])):0} sub="max in one day" accent={col.yellow}/>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:14}}>
            <Card title="Daily Registrations" span><ResponsiveContainer width="100%" height={220}><BarChart data={regTL} margin={{left:0,right:0,top:6,bottom:0}}><XAxis dataKey="name" tick={{fill:col.sub,fontSize:10}} axisLine={false} tickLine={false}/><YAxis hide/><Tooltip content={({active,payload})=>{if(!active||!payload?.length)return null;return<div style={{background:col.text,color:"#fff",padding:"6px 12px",borderRadius:8,fontSize:12}}><div style={{fontWeight:600}}>{payload[0].payload.name}</div><div>{payload[0].value} new · {payload[0].payload.total} total</div></div>;}}/><Bar dataKey="daily" fill={col.accent} radius={[4,4,0,0]} barSize={24}/></BarChart></ResponsiveContainer></Card>
            <Card title="Cumulative Growth" span><ResponsiveContainer width="100%" height={200}><BarChart data={regTL} margin={{left:0,right:0,top:6,bottom:0}}><XAxis dataKey="name" tick={{fill:col.sub,fontSize:10}} axisLine={false} tickLine={false}/><YAxis hide/><Tooltip content={({active,payload})=>{if(!active||!payload?.length)return null;return<div style={{background:col.text,color:"#fff",padding:"6px 12px",borderRadius:8,fontSize:12}}><div style={{fontWeight:600}}>{payload[0].payload.name}</div><div>Total: {payload[0].value}</div></div>;}}/><Bar dataKey="total" fill={col.green} radius={[4,4,0,0]} barSize={24}/></BarChart></ResponsiveContainer></Card>
          </div>
        </>}
      </div>
    </div>
  );
}