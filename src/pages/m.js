import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from 'react'

export default function Workspage() {

  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    fetch(`/api/project`)
      .then(res => res.json())
      .then(data => {
        if(data) {
          setProjectData(data)
        }
      })
    }, [])


  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden text-13">
      <div className="w-full px-12 py-12 border-b border-grey-darken">
        <div className="mr-8 flex">
          <Link href="/workspace" >
            <a className="block -mt-2 h-[28px]">
              <Image src="/images/logo.svg" width="77" height="28" className='block' alt="logo" />
            </a>
          </Link>
          <div className="ml-16 border-l border-grey-darken pl-8">
          {
            projectData ? 
            <span className="block h-24 px-8">{projectData.name}</span>
          : ''}
          </div>
        </div>
      </div> 
      <div className="flex flex-1">
        <div className="i-sidebar w-[250px] h-full border-r border-grey-darken py-24 px-16">
          
          <MenuTitle text="Objects"/>
          
          { projectData ?
              projectData.children.map(function(key, index){
                return (
                  <div key={index}>
                    <MenuItem text={key.name} id={key.id} children={key.children} />
                  </div>
                )
              })
            : ''
          }
          
        </div>
        <div className="i-content relative flex-1 h-full overflow-auto bg-grey">
          <div className="flex flex-shrink-0 w-full relative z-20">
            <div className="relative w-12 h-12 flex-shrink-0 z-10"></div>
            <div className="i-ruler relative flex-1 h-12 overflow-hidden border-b bg-white border-grey-darken"><svg className="absolute left-1/2 -translate-x-1/2 scale-y-80 bottom-0" height="18" width="2744"><path stroke="#ccc" strokeWidth="1" shapeRendering="crispEdges" fill="none" pointerEvents="none" d="M 2 18 v -4 Z M 12 18 v -4 Z M 22 18 v -4 Z M 32 18 v -4 Z M 42 18 v -4 Z M 52 18 v -4 Z M 62 18 v -4 Z M 72 18 v -18 Z M 82 18 v -4 Z M 92 18 v -4 Z M 102 18 v -4 Z M 112 18 v -4 Z M 122 18 v -4 Z M 132 18 v -4 Z M 142 18 v -4 Z M 152 18 v -4 Z M 162 18 v -4 Z M 172 18 v -18 Z M 182 18 v -4 Z M 192 18 v -4 Z M 202 18 v -4 Z M 212 18 v -4 Z M 222 18 v -4 Z M 232 18 v -4 Z M 242 18 v -4 Z M 252 18 v -4 Z M 262 18 v -4 Z M 272 18 v -18 Z M 282 18 v -4 Z M 292 18 v -4 Z M 302 18 v -4 Z M 312 18 v -4 Z M 322 18 v -4 Z M 332 18 v -4 Z M 342 18 v -4 Z M 352 18 v -4 Z M 362 18 v -4 Z M 372 18 v -18 Z M 382 18 v -4 Z M 392 18 v -4 Z M 402 18 v -4 Z M 412 18 v -4 Z M 422 18 v -4 Z M 432 18 v -4 Z M 442 18 v -4 Z M 452 18 v -4 Z M 462 18 v -4 Z M 472 18 v -18 Z M 482 18 v -4 Z M 492 18 v -4 Z M 502 18 v -4 Z M 512 18 v -4 Z M 522 18 v -4 Z M 532 18 v -4 Z M 542 18 v -4 Z M 552 18 v -4 Z M 562 18 v -4 Z M 572 18 v -18 Z M 582 18 v -4 Z M 592 18 v -4 Z M 602 18 v -4 Z M 612 18 v -4 Z M 622 18 v -4 Z M 632 18 v -4 Z M 642 18 v -4 Z M 652 18 v -4 Z M 662 18 v -4 Z M 672 18 v -18 Z M 682 18 v -4 Z M 692 18 v -4 Z M 702 18 v -4 Z M 712 18 v -4 Z M 722 18 v -4 Z M 732 18 v -4 Z M 742 18 v -4 Z M 752 18 v -4 Z M 762 18 v -4 Z M 772 18 v -18 Z M 782 18 v -4 Z M 792 18 v -4 Z M 802 18 v -4 Z M 812 18 v -4 Z M 822 18 v -4 Z M 832 18 v -4 Z M 842 18 v -4 Z M 852 18 v -4 Z M 862 18 v -4 Z M 872 18 v -18 Z M 882 18 v -4 Z M 892 18 v -4 Z M 902 18 v -4 Z M 912 18 v -4 Z M 922 18 v -4 Z M 932 18 v -4 Z M 942 18 v -4 Z M 952 18 v -4 Z M 962 18 v -4 Z M 972 18 v -18 Z M 982 18 v -4 Z M 992 18 v -4 Z M 1002 18 v -4 Z M 1012 18 v -4 Z M 1022 18 v -4 Z M 1032 18 v -4 Z M 1042 18 v -4 Z M 1052 18 v -4 Z M 1062 18 v -4 Z M 1072 18 v -18 Z M 1082 18 v -4 Z M 1092 18 v -4 Z M 1102 18 v -4 Z M 1112 18 v -4 Z M 1122 18 v -4 Z M 1132 18 v -4 Z M 1142 18 v -4 Z M 1152 18 v -4 Z M 1162 18 v -4 Z M 1172 18 v -18 Z M 1182 18 v -4 Z M 1192 18 v -4 Z M 1202 18 v -4 Z M 1212 18 v -4 Z M 1222 18 v -4 Z M 1232 18 v -4 Z M 1242 18 v -4 Z M 1252 18 v -4 Z M 1262 18 v -4 Z M 1272 18 v -18 Z M 1282 18 v -4 Z M 1292 18 v -4 Z M 1302 18 v -4 Z M 1312 18 v -4 Z M 1322 18 v -4 Z M 1332 18 v -4 Z M 1342 18 v -4 Z M 1352 18 v -4 Z M 1362 18 v -4 Z M 1372 18 v -18 Z M 1382 18 v -4 Z M 1392 18 v -4 Z M 1402 18 v -4 Z M 1412 18 v -4 Z M 1422 18 v -4 Z M 1432 18 v -4 Z M 1442 18 v -4 Z M 1452 18 v -4 Z M 1462 18 v -4 Z M 1472 18 v -18 Z M 1482 18 v -4 Z M 1492 18 v -4 Z M 1502 18 v -4 Z M 1512 18 v -4 Z M 1522 18 v -4 Z M 1532 18 v -4 Z M 1542 18 v -4 Z M 1552 18 v -4 Z M 1562 18 v -4 Z M 1572 18 v -18 Z M 1582 18 v -4 Z M 1592 18 v -4 Z M 1602 18 v -4 Z M 1612 18 v -4 Z M 1622 18 v -4 Z M 1632 18 v -4 Z M 1642 18 v -4 Z M 1652 18 v -4 Z M 1662 18 v -4 Z M 1672 18 v -18 Z M 1682 18 v -4 Z M 1692 18 v -4 Z M 1702 18 v -4 Z M 1712 18 v -4 Z M 1722 18 v -4 Z M 1732 18 v -4 Z M 1742 18 v -4 Z M 1752 18 v -4 Z M 1762 18 v -4 Z M 1772 18 v -18 Z M 1782 18 v -4 Z M 1792 18 v -4 Z M 1802 18 v -4 Z M 1812 18 v -4 Z M 1822 18 v -4 Z M 1832 18 v -4 Z M 1842 18 v -4 Z M 1852 18 v -4 Z M 1862 18 v -4 Z M 1872 18 v -18 Z M 1882 18 v -4 Z M 1892 18 v -4 Z M 1902 18 v -4 Z M 1912 18 v -4 Z M 1922 18 v -4 Z M 1932 18 v -4 Z M 1942 18 v -4 Z M 1952 18 v -4 Z M 1962 18 v -4 Z M 1972 18 v -18 Z M 1982 18 v -4 Z M 1992 18 v -4 Z M 2002 18 v -4 Z M 2012 18 v -4 Z M 2022 18 v -4 Z M 2032 18 v -4 Z M 2042 18 v -4 Z M 2052 18 v -4 Z M 2062 18 v -4 Z M 2072 18 v -18 Z M 2082 18 v -4 Z M 2092 18 v -4 Z M 2102 18 v -4 Z M 2112 18 v -4 Z M 2122 18 v -4 Z M 2132 18 v -4 Z M 2142 18 v -4 Z M 2152 18 v -4 Z M 2162 18 v -4 Z M 2172 18 v -18 Z M 2182 18 v -4 Z M 2192 18 v -4 Z M 2202 18 v -4 Z M 2212 18 v -4 Z M 2222 18 v -4 Z M 2232 18 v -4 Z M 2242 18 v -4 Z M 2252 18 v -4 Z M 2262 18 v -4 Z M 2272 18 v -18 Z M 2282 18 v -4 Z M 2292 18 v -4 Z M 2302 18 v -4 Z M 2312 18 v -4 Z M 2322 18 v -4 Z M 2332 18 v -4 Z M 2342 18 v -4 Z M 2352 18 v -4 Z M 2362 18 v -4 Z M 2372 18 v -18 Z M 2382 18 v -4 Z M 2392 18 v -4 Z M 2402 18 v -4 Z M 2412 18 v -4 Z M 2422 18 v -4 Z M 2432 18 v -4 Z M 2442 18 v -4 Z M 2452 18 v -4 Z M 2462 18 v -4 Z M 2472 18 v -18 Z M 2482 18 v -4 Z M 2492 18 v -4 Z M 2502 18 v -4 Z M 2512 18 v -4 Z M 2522 18 v -4 Z M 2532 18 v -4 Z M 2542 18 v -4 Z M 2552 18 v -4 Z M 2562 18 v -4 Z M 2572 18 v -18 Z M 2582 18 v -4 Z M 2592 18 v -4 Z M 2602 18 v -4 Z M 2612 18 v -4 Z M 2622 18 v -4 Z M 2632 18 v -4 Z M 2642 18 v -4 Z M 2652 18 v -4 Z M 2662 18 v -4 Z M 2672 18 v -18 Z M 2682 18 v -4 Z M 2692 18 v -4 Z M 2702 18 v -4 Z M 2712 18 v -4 Z M 2722 18 v -4 Z M 2732 18 v -4 Z "></path></svg></div>
          </div>
          <div className="flex flex-1 h-full overflow-hidden">
            <div className="i-ruler relative overflow-hidden w-12 flex-shrink-0 border-b bg-white border-grey-darken"><svg className="absolute top-1/2 -translate-y-1/2 right-0 scale-x-80" width="18" height="8198"><path stroke="#ccc" strokeWidth="1" shapeRendering="crispEdges" fill="none" pointerEvents="none" d="M 18 9 h -4 Z M 18 19 h -4 Z M 18 29 h -4 Z M 18 39 h -4 Z M 18 49 h -4 Z M 18 59 h -4 Z M 18 69 h -4 Z M 18 79 h -4 Z M 18 89 h -4 Z M 18 99 h -18 Z M 18 109 h -4 Z M 18 119 h -4 Z M 18 129 h -4 Z M 18 139 h -4 Z M 18 149 h -4 Z M 18 159 h -4 Z M 18 169 h -4 Z M 18 179 h -4 Z M 18 189 h -4 Z M 18 199 h -18 Z M 18 209 h -4 Z M 18 219 h -4 Z M 18 229 h -4 Z M 18 239 h -4 Z M 18 249 h -4 Z M 18 259 h -4 Z M 18 269 h -4 Z M 18 279 h -4 Z M 18 289 h -4 Z M 18 299 h -18 Z M 18 309 h -4 Z M 18 319 h -4 Z M 18 329 h -4 Z M 18 339 h -4 Z M 18 349 h -4 Z M 18 359 h -4 Z M 18 369 h -4 Z M 18 379 h -4 Z M 18 389 h -4 Z M 18 399 h -18 Z M 18 409 h -4 Z M 18 419 h -4 Z M 18 429 h -4 Z M 18 439 h -4 Z M 18 449 h -4 Z M 18 459 h -4 Z M 18 469 h -4 Z M 18 479 h -4 Z M 18 489 h -4 Z M 18 499 h -18 Z M 18 509 h -4 Z M 18 519 h -4 Z M 18 529 h -4 Z M 18 539 h -4 Z M 18 549 h -4 Z M 18 559 h -4 Z M 18 569 h -4 Z M 18 579 h -4 Z M 18 589 h -4 Z M 18 599 h -18 Z M 18 609 h -4 Z M 18 619 h -4 Z M 18 629 h -4 Z M 18 639 h -4 Z M 18 649 h -4 Z M 18 659 h -4 Z M 18 669 h -4 Z M 18 679 h -4 Z M 18 689 h -4 Z M 18 699 h -18 Z M 18 709 h -4 Z M 18 719 h -4 Z M 18 729 h -4 Z M 18 739 h -4 Z M 18 749 h -4 Z M 18 759 h -4 Z M 18 769 h -4 Z M 18 779 h -4 Z M 18 789 h -4 Z M 18 799 h -18 Z M 18 809 h -4 Z M 18 819 h -4 Z M 18 829 h -4 Z M 18 839 h -4 Z M 18 849 h -4 Z M 18 859 h -4 Z M 18 869 h -4 Z M 18 879 h -4 Z M 18 889 h -4 Z M 18 899 h -18 Z M 18 909 h -4 Z M 18 919 h -4 Z M 18 929 h -4 Z M 18 939 h -4 Z M 18 949 h -4 Z M 18 959 h -4 Z M 18 969 h -4 Z M 18 979 h -4 Z M 18 989 h -4 Z M 18 999 h -18 Z M 18 1009 h -4 Z M 18 1019 h -4 Z M 18 1029 h -4 Z M 18 1039 h -4 Z M 18 1049 h -4 Z M 18 1059 h -4 Z M 18 1069 h -4 Z M 18 1079 h -4 Z M 18 1089 h -4 Z M 18 1099 h -18 Z M 18 1109 h -4 Z M 18 1119 h -4 Z M 18 1129 h -4 Z M 18 1139 h -4 Z M 18 1149 h -4 Z M 18 1159 h -4 Z M 18 1169 h -4 Z M 18 1179 h -4 Z M 18 1189 h -4 Z M 18 1199 h -18 Z M 18 1209 h -4 Z M 18 1219 h -4 Z M 18 1229 h -4 Z M 18 1239 h -4 Z M 18 1249 h -4 Z M 18 1259 h -4 Z M 18 1269 h -4 Z M 18 1279 h -4 Z M 18 1289 h -4 Z M 18 1299 h -18 Z M 18 1309 h -4 Z M 18 1319 h -4 Z M 18 1329 h -4 Z M 18 1339 h -4 Z M 18 1349 h -4 Z M 18 1359 h -4 Z M 18 1369 h -4 Z M 18 1379 h -4 Z M 18 1389 h -4 Z M 18 1399 h -18 Z M 18 1409 h -4 Z M 18 1419 h -4 Z M 18 1429 h -4 Z M 18 1439 h -4 Z M 18 1449 h -4 Z M 18 1459 h -4 Z M 18 1469 h -4 Z M 18 1479 h -4 Z M 18 1489 h -4 Z M 18 1499 h -18 Z M 18 1509 h -4 Z M 18 1519 h -4 Z M 18 1529 h -4 Z M 18 1539 h -4 Z M 18 1549 h -4 Z M 18 1559 h -4 Z M 18 1569 h -4 Z M 18 1579 h -4 Z M 18 1589 h -4 Z M 18 1599 h -18 Z M 18 1609 h -4 Z M 18 1619 h -4 Z M 18 1629 h -4 Z M 18 1639 h -4 Z M 18 1649 h -4 Z M 18 1659 h -4 Z M 18 1669 h -4 Z M 18 1679 h -4 Z M 18 1689 h -4 Z M 18 1699 h -18 Z M 18 1709 h -4 Z M 18 1719 h -4 Z M 18 1729 h -4 Z M 18 1739 h -4 Z M 18 1749 h -4 Z M 18 1759 h -4 Z M 18 1769 h -4 Z M 18 1779 h -4 Z M 18 1789 h -4 Z M 18 1799 h -18 Z M 18 1809 h -4 Z M 18 1819 h -4 Z M 18 1829 h -4 Z M 18 1839 h -4 Z M 18 1849 h -4 Z M 18 1859 h -4 Z M 18 1869 h -4 Z M 18 1879 h -4 Z M 18 1889 h -4 Z M 18 1899 h -18 Z M 18 1909 h -4 Z M 18 1919 h -4 Z M 18 1929 h -4 Z M 18 1939 h -4 Z M 18 1949 h -4 Z M 18 1959 h -4 Z M 18 1969 h -4 Z M 18 1979 h -4 Z M 18 1989 h -4 Z M 18 1999 h -18 Z M 18 2009 h -4 Z M 18 2019 h -4 Z M 18 2029 h -4 Z M 18 2039 h -4 Z M 18 2049 h -4 Z M 18 2059 h -4 Z M 18 2069 h -4 Z M 18 2079 h -4 Z M 18 2089 h -4 Z M 18 2099 h -18 Z M 18 2109 h -4 Z M 18 2119 h -4 Z M 18 2129 h -4 Z M 18 2139 h -4 Z M 18 2149 h -4 Z M 18 2159 h -4 Z M 18 2169 h -4 Z M 18 2179 h -4 Z M 18 2189 h -4 Z M 18 2199 h -18 Z M 18 2209 h -4 Z M 18 2219 h -4 Z M 18 2229 h -4 Z M 18 2239 h -4 Z M 18 2249 h -4 Z M 18 2259 h -4 Z M 18 2269 h -4 Z M 18 2279 h -4 Z M 18 2289 h -4 Z M 18 2299 h -18 Z M 18 2309 h -4 Z M 18 2319 h -4 Z M 18 2329 h -4 Z M 18 2339 h -4 Z M 18 2349 h -4 Z M 18 2359 h -4 Z M 18 2369 h -4 Z M 18 2379 h -4 Z M 18 2389 h -4 Z M 18 2399 h -18 Z M 18 2409 h -4 Z M 18 2419 h -4 Z M 18 2429 h -4 Z M 18 2439 h -4 Z M 18 2449 h -4 Z M 18 2459 h -4 Z M 18 2469 h -4 Z M 18 2479 h -4 Z M 18 2489 h -4 Z M 18 2499 h -18 Z M 18 2509 h -4 Z M 18 2519 h -4 Z M 18 2529 h -4 Z M 18 2539 h -4 Z M 18 2549 h -4 Z M 18 2559 h -4 Z M 18 2569 h -4 Z M 18 2579 h -4 Z M 18 2589 h -4 Z M 18 2599 h -18 Z M 18 2609 h -4 Z M 18 2619 h -4 Z M 18 2629 h -4 Z M 18 2639 h -4 Z M 18 2649 h -4 Z M 18 2659 h -4 Z M 18 2669 h -4 Z M 18 2679 h -4 Z M 18 2689 h -4 Z M 18 2699 h -18 Z M 18 2709 h -4 Z M 18 2719 h -4 Z M 18 2729 h -4 Z M 18 2739 h -4 Z M 18 2749 h -4 Z M 18 2759 h -4 Z M 18 2769 h -4 Z M 18 2779 h -4 Z M 18 2789 h -4 Z M 18 2799 h -18 Z M 18 2809 h -4 Z M 18 2819 h -4 Z M 18 2829 h -4 Z M 18 2839 h -4 Z M 18 2849 h -4 Z M 18 2859 h -4 Z M 18 2869 h -4 Z M 18 2879 h -4 Z M 18 2889 h -4 Z M 18 2899 h -18 Z M 18 2909 h -4 Z M 18 2919 h -4 Z M 18 2929 h -4 Z M 18 2939 h -4 Z M 18 2949 h -4 Z M 18 2959 h -4 Z M 18 2969 h -4 Z M 18 2979 h -4 Z M 18 2989 h -4 Z M 18 2999 h -18 Z M 18 3009 h -4 Z M 18 3019 h -4 Z M 18 3029 h -4 Z M 18 3039 h -4 Z M 18 3049 h -4 Z M 18 3059 h -4 Z M 18 3069 h -4 Z M 18 3079 h -4 Z M 18 3089 h -4 Z M 18 3099 h -18 Z M 18 3109 h -4 Z M 18 3119 h -4 Z M 18 3129 h -4 Z M 18 3139 h -4 Z M 18 3149 h -4 Z M 18 3159 h -4 Z M 18 3169 h -4 Z M 18 3179 h -4 Z M 18 3189 h -4 Z M 18 3199 h -18 Z M 18 3209 h -4 Z M 18 3219 h -4 Z M 18 3229 h -4 Z M 18 3239 h -4 Z M 18 3249 h -4 Z M 18 3259 h -4 Z M 18 3269 h -4 Z M 18 3279 h -4 Z M 18 3289 h -4 Z M 18 3299 h -18 Z M 18 3309 h -4 Z M 18 3319 h -4 Z M 18 3329 h -4 Z M 18 3339 h -4 Z M 18 3349 h -4 Z M 18 3359 h -4 Z M 18 3369 h -4 Z M 18 3379 h -4 Z M 18 3389 h -4 Z M 18 3399 h -18 Z M 18 3409 h -4 Z M 18 3419 h -4 Z M 18 3429 h -4 Z M 18 3439 h -4 Z M 18 3449 h -4 Z M 18 3459 h -4 Z M 18 3469 h -4 Z M 18 3479 h -4 Z M 18 3489 h -4 Z M 18 3499 h -18 Z M 18 3509 h -4 Z M 18 3519 h -4 Z M 18 3529 h -4 Z M 18 3539 h -4 Z M 18 3549 h -4 Z M 18 3559 h -4 Z M 18 3569 h -4 Z M 18 3579 h -4 Z M 18 3589 h -4 Z M 18 3599 h -18 Z M 18 3609 h -4 Z M 18 3619 h -4 Z M 18 3629 h -4 Z M 18 3639 h -4 Z M 18 3649 h -4 Z M 18 3659 h -4 Z M 18 3669 h -4 Z M 18 3679 h -4 Z M 18 3689 h -4 Z M 18 3699 h -18 Z M 18 3709 h -4 Z M 18 3719 h -4 Z M 18 3729 h -4 Z M 18 3739 h -4 Z M 18 3749 h -4 Z M 18 3759 h -4 Z M 18 3769 h -4 Z M 18 3779 h -4 Z M 18 3789 h -4 Z M 18 3799 h -18 Z M 18 3809 h -4 Z M 18 3819 h -4 Z M 18 3829 h -4 Z M 18 3839 h -4 Z M 18 3849 h -4 Z M 18 3859 h -4 Z M 18 3869 h -4 Z M 18 3879 h -4 Z M 18 3889 h -4 Z M 18 3899 h -18 Z M 18 3909 h -4 Z M 18 3919 h -4 Z M 18 3929 h -4 Z M 18 3939 h -4 Z M 18 3949 h -4 Z M 18 3959 h -4 Z M 18 3969 h -4 Z M 18 3979 h -4 Z M 18 3989 h -4 Z M 18 3999 h -18 Z M 18 4009 h -4 Z M 18 4019 h -4 Z M 18 4029 h -4 Z M 18 4039 h -4 Z M 18 4049 h -4 Z M 18 4059 h -4 Z M 18 4069 h -4 Z M 18 4079 h -4 Z M 18 4089 h -4 Z M 18 4099 h -18 Z M 18 4109 h -4 Z M 18 4119 h -4 Z M 18 4129 h -4 Z M 18 4139 h -4 Z M 18 4149 h -4 Z M 18 4159 h -4 Z M 18 4169 h -4 Z M 18 4179 h -4 Z M 18 4189 h -4 Z M 18 4199 h -18 Z M 18 4209 h -4 Z M 18 4219 h -4 Z M 18 4229 h -4 Z M 18 4239 h -4 Z M 18 4249 h -4 Z M 18 4259 h -4 Z M 18 4269 h -4 Z M 18 4279 h -4 Z M 18 4289 h -4 Z M 18 4299 h -18 Z M 18 4309 h -4 Z M 18 4319 h -4 Z M 18 4329 h -4 Z M 18 4339 h -4 Z M 18 4349 h -4 Z M 18 4359 h -4 Z M 18 4369 h -4 Z M 18 4379 h -4 Z M 18 4389 h -4 Z M 18 4399 h -18 Z M 18 4409 h -4 Z M 18 4419 h -4 Z M 18 4429 h -4 Z M 18 4439 h -4 Z M 18 4449 h -4 Z M 18 4459 h -4 Z M 18 4469 h -4 Z M 18 4479 h -4 Z M 18 4489 h -4 Z M 18 4499 h -18 Z M 18 4509 h -4 Z M 18 4519 h -4 Z M 18 4529 h -4 Z M 18 4539 h -4 Z M 18 4549 h -4 Z M 18 4559 h -4 Z M 18 4569 h -4 Z M 18 4579 h -4 Z M 18 4589 h -4 Z M 18 4599 h -18 Z M 18 4609 h -4 Z M 18 4619 h -4 Z M 18 4629 h -4 Z M 18 4639 h -4 Z M 18 4649 h -4 Z M 18 4659 h -4 Z M 18 4669 h -4 Z M 18 4679 h -4 Z M 18 4689 h -4 Z M 18 4699 h -18 Z M 18 4709 h -4 Z M 18 4719 h -4 Z M 18 4729 h -4 Z M 18 4739 h -4 Z M 18 4749 h -4 Z M 18 4759 h -4 Z M 18 4769 h -4 Z M 18 4779 h -4 Z M 18 4789 h -4 Z M 18 4799 h -18 Z M 18 4809 h -4 Z M 18 4819 h -4 Z M 18 4829 h -4 Z M 18 4839 h -4 Z M 18 4849 h -4 Z M 18 4859 h -4 Z M 18 4869 h -4 Z M 18 4879 h -4 Z M 18 4889 h -4 Z M 18 4899 h -18 Z M 18 4909 h -4 Z M 18 4919 h -4 Z M 18 4929 h -4 Z M 18 4939 h -4 Z M 18 4949 h -4 Z M 18 4959 h -4 Z M 18 4969 h -4 Z M 18 4979 h -4 Z M 18 4989 h -4 Z M 18 4999 h -18 Z M 18 5009 h -4 Z M 18 5019 h -4 Z M 18 5029 h -4 Z M 18 5039 h -4 Z M 18 5049 h -4 Z M 18 5059 h -4 Z M 18 5069 h -4 Z M 18 5079 h -4 Z M 18 5089 h -4 Z M 18 5099 h -18 Z M 18 5109 h -4 Z M 18 5119 h -4 Z M 18 5129 h -4 Z M 18 5139 h -4 Z M 18 5149 h -4 Z M 18 5159 h -4 Z M 18 5169 h -4 Z M 18 5179 h -4 Z M 18 5189 h -4 Z M 18 5199 h -18 Z M 18 5209 h -4 Z M 18 5219 h -4 Z M 18 5229 h -4 Z M 18 5239 h -4 Z M 18 5249 h -4 Z M 18 5259 h -4 Z M 18 5269 h -4 Z M 18 5279 h -4 Z M 18 5289 h -4 Z M 18 5299 h -18 Z M 18 5309 h -4 Z M 18 5319 h -4 Z M 18 5329 h -4 Z M 18 5339 h -4 Z M 18 5349 h -4 Z M 18 5359 h -4 Z M 18 5369 h -4 Z M 18 5379 h -4 Z M 18 5389 h -4 Z M 18 5399 h -18 Z M 18 5409 h -4 Z M 18 5419 h -4 Z M 18 5429 h -4 Z M 18 5439 h -4 Z M 18 5449 h -4 Z M 18 5459 h -4 Z M 18 5469 h -4 Z M 18 5479 h -4 Z M 18 5489 h -4 Z M 18 5499 h -18 Z M 18 5509 h -4 Z M 18 5519 h -4 Z M 18 5529 h -4 Z M 18 5539 h -4 Z M 18 5549 h -4 Z M 18 5559 h -4 Z M 18 5569 h -4 Z M 18 5579 h -4 Z M 18 5589 h -4 Z M 18 5599 h -18 Z M 18 5609 h -4 Z M 18 5619 h -4 Z M 18 5629 h -4 Z M 18 5639 h -4 Z M 18 5649 h -4 Z M 18 5659 h -4 Z M 18 5669 h -4 Z M 18 5679 h -4 Z M 18 5689 h -4 Z M 18 5699 h -18 Z M 18 5709 h -4 Z M 18 5719 h -4 Z M 18 5729 h -4 Z M 18 5739 h -4 Z M 18 5749 h -4 Z M 18 5759 h -4 Z M 18 5769 h -4 Z M 18 5779 h -4 Z M 18 5789 h -4 Z M 18 5799 h -18 Z M 18 5809 h -4 Z M 18 5819 h -4 Z M 18 5829 h -4 Z M 18 5839 h -4 Z M 18 5849 h -4 Z M 18 5859 h -4 Z M 18 5869 h -4 Z M 18 5879 h -4 Z M 18 5889 h -4 Z M 18 5899 h -18 Z M 18 5909 h -4 Z M 18 5919 h -4 Z M 18 5929 h -4 Z M 18 5939 h -4 Z M 18 5949 h -4 Z M 18 5959 h -4 Z M 18 5969 h -4 Z M 18 5979 h -4 Z M 18 5989 h -4 Z M 18 5999 h -18 Z M 18 6009 h -4 Z M 18 6019 h -4 Z M 18 6029 h -4 Z M 18 6039 h -4 Z M 18 6049 h -4 Z M 18 6059 h -4 Z M 18 6069 h -4 Z M 18 6079 h -4 Z M 18 6089 h -4 Z M 18 6099 h -18 Z M 18 6109 h -4 Z M 18 6119 h -4 Z M 18 6129 h -4 Z M 18 6139 h -4 Z M 18 6149 h -4 Z M 18 6159 h -4 Z M 18 6169 h -4 Z M 18 6179 h -4 Z M 18 6189 h -4 Z M 18 6199 h -18 Z M 18 6209 h -4 Z M 18 6219 h -4 Z M 18 6229 h -4 Z M 18 6239 h -4 Z M 18 6249 h -4 Z M 18 6259 h -4 Z M 18 6269 h -4 Z M 18 6279 h -4 Z M 18 6289 h -4 Z M 18 6299 h -18 Z M 18 6309 h -4 Z M 18 6319 h -4 Z M 18 6329 h -4 Z M 18 6339 h -4 Z M 18 6349 h -4 Z M 18 6359 h -4 Z M 18 6369 h -4 Z M 18 6379 h -4 Z M 18 6389 h -4 Z M 18 6399 h -18 Z M 18 6409 h -4 Z M 18 6419 h -4 Z M 18 6429 h -4 Z M 18 6439 h -4 Z M 18 6449 h -4 Z M 18 6459 h -4 Z M 18 6469 h -4 Z M 18 6479 h -4 Z M 18 6489 h -4 Z M 18 6499 h -18 Z M 18 6509 h -4 Z M 18 6519 h -4 Z M 18 6529 h -4 Z M 18 6539 h -4 Z M 18 6549 h -4 Z M 18 6559 h -4 Z M 18 6569 h -4 Z M 18 6579 h -4 Z M 18 6589 h -4 Z M 18 6599 h -18 Z M 18 6609 h -4 Z M 18 6619 h -4 Z M 18 6629 h -4 Z M 18 6639 h -4 Z M 18 6649 h -4 Z M 18 6659 h -4 Z M 18 6669 h -4 Z M 18 6679 h -4 Z M 18 6689 h -4 Z M 18 6699 h -18 Z M 18 6709 h -4 Z M 18 6719 h -4 Z M 18 6729 h -4 Z M 18 6739 h -4 Z M 18 6749 h -4 Z M 18 6759 h -4 Z M 18 6769 h -4 Z M 18 6779 h -4 Z M 18 6789 h -4 Z M 18 6799 h -18 Z M 18 6809 h -4 Z M 18 6819 h -4 Z M 18 6829 h -4 Z M 18 6839 h -4 Z M 18 6849 h -4 Z M 18 6859 h -4 Z M 18 6869 h -4 Z M 18 6879 h -4 Z M 18 6889 h -4 Z M 18 6899 h -18 Z M 18 6909 h -4 Z M 18 6919 h -4 Z M 18 6929 h -4 Z M 18 6939 h -4 Z M 18 6949 h -4 Z M 18 6959 h -4 Z M 18 6969 h -4 Z M 18 6979 h -4 Z M 18 6989 h -4 Z M 18 6999 h -18 Z M 18 7009 h -4 Z M 18 7019 h -4 Z M 18 7029 h -4 Z M 18 7039 h -4 Z M 18 7049 h -4 Z M 18 7059 h -4 Z M 18 7069 h -4 Z M 18 7079 h -4 Z M 18 7089 h -4 Z M 18 7099 h -18 Z M 18 7109 h -4 Z M 18 7119 h -4 Z M 18 7129 h -4 Z M 18 7139 h -4 Z M 18 7149 h -4 Z M 18 7159 h -4 Z M 18 7169 h -4 Z M 18 7179 h -4 Z M 18 7189 h -4 Z M 18 7199 h -18 Z M 18 7209 h -4 Z M 18 7219 h -4 Z M 18 7229 h -4 Z M 18 7239 h -4 Z M 18 7249 h -4 Z M 18 7259 h -4 Z M 18 7269 h -4 Z M 18 7279 h -4 Z M 18 7289 h -4 Z M 18 7299 h -18 Z M 18 7309 h -4 Z M 18 7319 h -4 Z M 18 7329 h -4 Z M 18 7339 h -4 Z M 18 7349 h -4 Z M 18 7359 h -4 Z M 18 7369 h -4 Z M 18 7379 h -4 Z M 18 7389 h -4 Z M 18 7399 h -18 Z M 18 7409 h -4 Z M 18 7419 h -4 Z M 18 7429 h -4 Z M 18 7439 h -4 Z M 18 7449 h -4 Z M 18 7459 h -4 Z M 18 7469 h -4 Z M 18 7479 h -4 Z M 18 7489 h -4 Z M 18 7499 h -18 Z M 18 7509 h -4 Z M 18 7519 h -4 Z M 18 7529 h -4 Z M 18 7539 h -4 Z M 18 7549 h -4 Z M 18 7559 h -4 Z M 18 7569 h -4 Z M 18 7579 h -4 Z M 18 7589 h -4 Z M 18 7599 h -18 Z M 18 7609 h -4 Z M 18 7619 h -4 Z M 18 7629 h -4 Z M 18 7639 h -4 Z M 18 7649 h -4 Z M 18 7659 h -4 Z M 18 7669 h -4 Z M 18 7679 h -4 Z M 18 7689 h -4 Z M 18 7699 h -18 Z M 18 7709 h -4 Z M 18 7719 h -4 Z M 18 7729 h -4 Z M 18 7739 h -4 Z M 18 7749 h -4 Z M 18 7759 h -4 Z M 18 7769 h -4 Z M 18 7779 h -4 Z M 18 7789 h -4 Z M 18 7799 h -18 Z M 18 7809 h -4 Z M 18 7819 h -4 Z M 18 7829 h -4 Z M 18 7839 h -4 Z M 18 7849 h -4 Z M 18 7859 h -4 Z M 18 7869 h -4 Z M 18 7879 h -4 Z M 18 7889 h -4 Z M 18 7899 h -18 Z M 18 7909 h -4 Z M 18 7919 h -4 Z M 18 7929 h -4 Z M 18 7939 h -4 Z M 18 7949 h -4 Z M 18 7959 h -4 Z M 18 7969 h -4 Z M 18 7979 h -4 Z M 18 7989 h -4 Z M 18 7999 h -18 Z M 18 8009 h -4 Z M 18 8019 h -4 Z M 18 8029 h -4 Z M 18 8039 h -4 Z M 18 8049 h -4 Z M 18 8059 h -4 Z M 18 8069 h -4 Z M 18 8079 h -4 Z M 18 8089 h -4 Z M 18 8099 h -18 Z M 18 8109 h -4 Z M 18 8119 h -4 Z M 18 8129 h -4 Z M 18 8139 h -4 Z M 18 8149 h -4 Z M 18 8159 h -4 Z M 18 8169 h -4 Z M 18 8179 h -4 Z "></path></svg></div>
            <div className="i-canvas flex-1 relative overflow-auto">
              {/* <div className="absolute w-[1500px] h-[1500px]"> */}
              <div className="absolute w-full h-full">

                <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={projectData && projectData.size ? projectData.size : {}}>
                  { projectData ?
                      projectData.children.map(function(key, index){
                        return (
                          <Element styles={key.style} id={key.id} key={index} text={key.data && key.data.text ? key.data.text : ''} children={key.children}/>
                        )
                      })
                    : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export function Card(props) {
  return(
    <Link href="/m">
      <a>
        <div className="bg-grey-darken w-full aspect-4/3 rounded"></div>
        <div className="py-8">{props.title}</div>
      </a>
    </Link>
  )
}


export function MenuTitle(props) {
  return (
    <div className="mt-16 text-11 uppercase font-semibold opacity-50 px-8">{props.text}</div>
  )
}

export function MenuItem(props) {

  return (
    props.children ? (
      <>
        <div>
          <div id={props.id} className="block items-center hover:bg-grey/50 py-4 px-8 rounded-2 my-4 cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap">
            {props.text}
          </div>
          <div className="ml-8 pl-8 border-l border-grey-darken">

            {
              props.children.map(function(key, index){
                return <MenuItem text={key.name ? key.name : key.id} id={key.id} key={key.id} children={key.children} />
              })
            }
          </div>
        </div>
      </>
    )
    :
    <div id={props.id} className="block items-center hover:bg-grey/50 py-4 px-8 rounded-2 my-4 cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap">
      {props.text}
    </div>
   
  )
}

export function Element(props) {

  if (props.styles) {
    var styles = props.styles

    var style = {}
    if (styles) {
      for (const [key, value] of Object.entries(styles)) {
        {style = {...style, [key] : value}}
      }
    }
    
  } else {
    var styles = false
  }

  return (
       props.children ? (
        <div style={style} object-id={props.id}>
          {props.text}
          {
            props.children.map(function(key, index){
              return <Element styles={key.style} id={key.id} key={key.id} text={key.data && key.data.text ? key.data.text : ''} children={key.children}/>
            })
          }
        </div>
       )
      :
        <div style={style} object-id={props.id}>
          {props.text}
        </div>
      
  )

}