/**
 * title: 基础用法
 * desc: 1秒执行一次累加。
 */

 import React, { useState } from 'react';
 import { useInterval } from 'yhooks';
 

 export default () => {
   const [nums, setNums] = useState(0);
 
   useInterval(() => {
    setNums(nums+1)
   }, 1000)
   return (
     <span>nums: {nums}</span>
   );
 };
 