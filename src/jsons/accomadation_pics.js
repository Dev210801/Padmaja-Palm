import img1 from "../asserts/resortpics/rooms/4.JPG"
import img2 from "../asserts/resortpics/rooms/2.JPG"
import img3 from "../asserts/resortpics/rooms/3.JPG"
import img5 from "../asserts/resortpics/rooms/5.JPG"
import img0 from "../asserts/resortpics/rooms/6.JPG"
import villa1 from "../asserts/resortpics/villa/1.JPG"
import villa2 from "../asserts/resortpics/villa/2.JPG"
import villa3 from "../asserts/resortpics/villa/3.JPG"
import villa4 from "../asserts/resortpics/villa/4.JPG"
import villa5 from "../asserts/resortpics/villa/5.JPG"
import villa6 from "../asserts/resortpics/villa/6.JPG"
import villa7 from "../asserts/resortpics/villa/7.JPG"
import room1 from "../asserts/resortpics/rooms 2/1.jpg"
import room2 from "../asserts/resortpics/rooms 2/2.jpg"
import room3 from "../asserts/resortpics/rooms 2/3.jpg"
import room4 from "../asserts/resortpics/rooms 2/4.jpg"
import img11 from "../asserts/resortpics/Marriage.jpg"
import img22 from "../asserts/resortpics/2.jpg"
import img33 from "../asserts/resortpics/4.jpg"
import img44 from "../asserts/resortpics/3.jpg"
import img55 from "../asserts/resortpics/5.jpg"
import img66 from "../asserts/resortpics/8.jpg"
import img77 from "../asserts/resortpics/1.jpg"
import img88 from "../asserts/resortpics/6.jpg"
import { Banquet, ph, lawn } from "./venues_pics"
export const rooms = [img1, img3, img5];
export const villa = [villa1, villa2, villa3, villa6];
export const rooms2 = [room1, room2, room3];
const allimgs = [img11, img22, img33, img44, img55, img66, img77, img88,  img1, img2, img3, img0, img5, villa1, villa2, villa3, villa4, villa5, villa6, villa7, room3, room4, room1, room2];
allimgs.concat(lawn);
allimgs.concat(ph);
allimgs.concat(Banquet);
export {allimgs};