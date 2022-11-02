import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Nav from './component/Nav';
import LoginForm from './component/Login';
import Store from './component/Store';
import SmallCentered from './component/Footer';
import { Grid} from '@chakra-ui/react';
import {Array} from '../src/component/Cards';



function Routers() {
    const find = Array.filter(item => item.search);

  return (
    <>
    <Nav />


<Routes>
    <Route path='./component/Login' element= {<LoginForm />}>

    </Route>

<Grid templateColumns='repeat(3, 1fr)' gap={2}>

<Store Image = {"Js.png"}
        name =  {"معسكر تطوير تطبيقات الويب باستخدام Javascript"}
        description = {'يمكنك هذا المعسكر من بناء وتطوير تطبيقات ويب تفاعلية متكاملة باستخدام JavaScript'}
        details = {'التفاصيل'}
        join = {false}
        >

</Store>

<Store Image = {"figma.png"}
        name =  {"UI/UX من البداية حتى الاتقان باستخدام Figma"}
        description = {'دورة UI/UX نبدأ بأساسيات UI حتى مراحل الإتقان باستخدام Figma'}
        details = {'التفاصيل'}
        join = {true}
        >

</Store>

<Store Image = {"Apple.png"}
        name =  {"تطوير تطبيقات iOS باستخدام SwiftUI"}
        description = {'برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple'}
        details = {'التفاصيل'}
        join = {false}
        >
</Store>
<Store Image = {"image1.png"}
        name =  {"دورة تصميم المواقع بمنهجية No-Code"}
        description = {'نستهدف في هذه الدورة الراغبين بتعلم تصميم مواقع الويب من الصفر لتطوير مهاراتهم عن طريق مجموعة من التدريبات العملية والممتعة'}
        details = {'التفاصيل'}
        join = {true}
        >
</Store>

<Store Image = {"git.png"}
        name =  {"دورة Git and Github"}
        description = {'تعلم أساسيات إدارة مشروعك باستخدام Git &amp;amp;amp;amp;amp;amp; Github والذي يستخدم على نطاق واسع من قبل المطورين من جميع أنحاء العالم'}
        details = {'التفاصيل'}
        join = {false}
        >
</Store>

<Store Image = {"image1.png"}
        name =  {"مقدمة في DevOps"}
        description = {'تعلم أهمية DevOps وأساسياته'}
        details = {'التفاصيل'}
        join = {true}
        >

</Store> 
</Grid>
</Routes>
<SmallCentered>

</SmallCentered>
    </>
  )
}

export default Routers