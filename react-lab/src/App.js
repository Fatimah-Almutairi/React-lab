import './App.css';
import Nav from './component/Nav';
// import Cards from './component/Store';
import Search from './component/Search';
import SmallCentered from './component/Footer';
// import { Grid} from '@chakra-ui/react';
import LoginForm from './component/Login';
import {Array} from '../src/component/Cards';

function App() {
        const find = Array.filter(item => item.search);
  return (
    < >
        <Nav>
          <LoginForm />
        </Nav>
        <Search />

    <div className='card'>
    {/* <Grid templateColumns='repeat(3, 1fr)' gap={2}>

    <Cards Image = {"Js.png"}
            name =  {"معسكر تطوير تطبيقات الويب باستخدام Javascript"}
            description = {'يمكنك هذا المعسكر من بناء وتطوير تطبيقات ويب تفاعلية متكاملة باستخدام JavaScript'}
            details = {'التفاصيل'}
            join = {false}
            >

    </Cards>

    <Cards Image = {"figma.png"}
            name =  {"UI/UX من البداية حتى الاتقان باستخدام Figma"}
            description = {'دورة UI/UX نبدأ بأساسيات UI حتى مراحل الإتقان باستخدام Figma'}
            details = {'التفاصيل'}
            join = {true}
            >

    </Cards>

    <Cards Image = {"Apple.png"}
            name =  {"تطوير تطبيقات iOS باستخدام SwiftUI"}
            description = {'برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple'}
            details = {'التفاصيل'}
            join = {false}
            >
    </Cards>
    <Cards Image = {"image1.png"}
            name =  {"دورة تصميم المواقع بمنهجية No-Code"}
            description = {'نستهدف في هذه الدورة الراغبين بتعلم تصميم مواقع الويب من الصفر لتطوير مهاراتهم عن طريق مجموعة من التدريبات العملية والممتعة'}
            details = {'التفاصيل'}
            join = {true}
            >
    </Cards>

    <Cards Image = {"git.png"}
            name =  {"دورة Git and Github"}
            description = {'تعلم أساسيات إدارة مشروعك باستخدام Git and Github والذي يستخدم على نطاق واسع من قبل المطورين من جميع أنحاء العالم.'}
            details = {'التفاصيل'}
            join = {false}
            >
    </Cards>

    <Cards Image = {"image1.png"}
            name =  {"مقدمة في DevOps"}
            description = {'تعلم أهمية DevOps وأساسياته'}
            details = {'التفاصيل'}
            join = {true}
            >

    </Cards> 
    <Cards Image = {"flutter.png"}
            name =  {"معسكر تطوير تطبيقات الجوال والويب باستخدام Flutter"}
            description = {'معسكر مكثف لتطوير تطبيقات الجوال والويب باستخدام إطار عمل Flutter الذي يعتبر الإطار الأحدث والأسهل لبناء تطبيقات تعمل على عدة أنظمة.'}
            details = {'التفاصيل'}
            join = {true}
            >

    </Cards>    
    <Cards Image = {"3D.png"}
            name =  {"دورة التصميم ثلاثي الأبعاد"}
            description = {'للمهتمين بالرسم الهندسي والتصميم ثلاثي الأبعاد.'}
            details = {'التفاصيل'}
            join = {false}
            >

    </Cards>
    <Cards Image = {"image1.png"}
            name =  {"دورة ITIL لإدارة خدمات تقنية المعلومات"}
            description = {'نستهدف في هذه الدورة المهتمين بتعلم مفاهيم ITIL 4 من خلال تزويدهم بعدد من المفاهيم والتطبيقات العملية المختصة بخدمات تقنية المعلومات.'}
            details = {'التفاصيل'}
            join = {true}
            >

    </Cards>
    <Cards Image = {"report.png"}
            name =  {'برمجة الروبوت'}
            description = {'سيتم التركيز في هذه الدورة على طريقة تصميم الدوائر الإلكترونية وكيفية برمجتها والتحكم بها.'}
            details = {'التفاصيل'}
            join = {true}
            >

    </Cards>
    <Cards Image = {"unity.jpeg"}
            name =  {'معسكر تطوير الألعاب باستخدام Unity للناشئين'}
            description = {'يهدف معسكر تطوير الألعاب باستخدام محرك الألعاب Unity ولغة البرمجة #C إلى تمكين المتدرب ابتداءً من المهارات الأساسية إلى تطوير وبرمجة الألعاب بشكل كامل'}
            details = {'التفاصيل'}
            join = {false}
            >

    </Cards>
    <Cards Image = {"flutter.png"}
            name =  {"معسكر تطوير تطبيقات الجوال والويب باستخدام Flutter"}
            description = {'معسكر مكثف لتطوير تطبيقات الجوال والويب باستخدام إطار عمل Flutter الذي يعتبر الإطار الأحدث والأسهل لبناء تطبيقات تعمل على عدة أنظمة.'}
            details = {'التفاصيل'}
            join = {true}
            >

    </Cards>  
    </Grid> */}

    </div>
    <SmallCentered>

    </SmallCentered>
    </>
  );
}

export default App;



