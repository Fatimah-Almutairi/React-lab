import './App.css';
import {useState} from 'react'
import Nav from './component/Nav';
import Cards from './component/Store';
import SmallCentered from './component/Footer';
import { Grid, Input, Button, Image} from '@chakra-ui/react';
import LoginForm from './component/Login';
import {Array} from '../src/component/Cards';
// import Search from './component/Search';
function App() {
        const [search,setSearch] = useState('');
        const find = Array.filter(item => item.search);
  return (
    < >
    <Nav>

            <Input type="text" placeholder="Search..." onChange={(e) => {
                    e.preventDefault();
                    setSearch(e.target.value); }} />
                      <Button>
                  <Image src="search.png" width="90%" height="80%" />
                </Button>
        {/* <div className='grid-container'>
        <div className='cards-container'>
          {find.map((item) => (
            <Store img={item.img} title={item.title} description={item.description} type={item.type} location={item.location} isAvailable={item.isAvailable}/>
          ))}
        </div>
      </div> */}
                {/* <Button>
                  <Image src="search.png" width="90%" height="80%" />
                </Button>
                <Box>
                {Array.filter((Card) => Card.name.include(search))
                .map((Card) => (
                    <Flex >{Card.name}</Flex>
                  )
                )}
              </Box> */}

    </Nav>
    <LoginForm />
    <div className='card'>
    <Grid templateColumns='repeat(3, 1fr)' gap={2}>{find.map((item) => (
    <Cards image = {item.image}
            name =  {item.name}
            description = {item.description}
            details = {item.details}
            join = {item.join}
            > 
    </Cards>))}

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
            description = {'تعلم أساسيات إدارة مشروعك باستخدام Git &amp;amp;amp;amp;amp;amp; Github والذي يستخدم على نطاق واسع من قبل المطورين من جميع أنحاء العالم'}
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
    </Grid>

    </div>
    <SmallCentered>

    </SmallCentered>
    </>
  );
}

export default App;



