(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-072f2fb8"],{7120:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"c4w-section",attrs:{type:"flex",justify:"center"}},[o("div",{staticClass:"container-md"},[o("a-row",[o("a-col",[e.section.title?o("h1",[e._v(e._s(e.section.title))]):e._e(),e.section.description?o("p",[e._v(e._s(e.section.description)+" >")]):e._e()]),e.hasJobs?[e._l(e.jobs,(function(t,n){return[t.length>0?o("a-col",{key:n},[o("a-divider"),o("p",{style:{color:"#c25959",marginBottom:"0rem"}},[e._v(" "+e._s(e.jobLabels.categories[n])+" ")]),o("a-collapse",[o("a-icon",{style:{fontSize:"1rem"},attrs:{slot:"expandIcon","two-tone-color":"#C25959",type:"plus"},slot:"expandIcon"}),e._l(t,(function(t,n){return o("a-collapse-panel",{key:n,attrs:{header:t.job_title}},[o("a-row",{attrs:{gutter:[0,20]}},[o("a-col",[o("p",[o("a-tag",{attrs:{color:"pink"}},[e._v(e._s(e.jobLabels.types[t.job_type]))]),o("a-tag",{attrs:{color:"cyan"}},[o("a-icon",{attrs:{type:"environment"}}),e._v(" "+e._s(e.jobLabels.locations[t.job_location])+" ")],1)],1)]),t.job_description?o("a-col",[o("p",{domProps:{innerHTML:e._s(t.job_description)}})]):e._e(),t.job_responsibilities?o("a-col",[o("h4",[e._v("Responsibilities")]),o("p",{domProps:{innerHTML:e._s(t.job_responsibilities)}})]):e._e(),t.job_requirements?o("a-col",[o("h4",[e._v("Requirements")]),o("p",{domProps:{innerHTML:e._s(t.job_requirements)}})]):e._e(),t.job_benefits?o("a-col",[o("h4",[e._v("Beneifts")]),o("p",{domProps:{innerHTML:e._s(t.job_benefits)}})]):e._e(),o("a-col",[o("a-button",{attrs:{disabled:!t.job_link,href:t.job_link}},[e._v(" Apply now "),o("a-icon",{attrs:{type:"arrow-right"}})],1)],1)],1)],1)}))],2)],1):e._e()]}))]:[o("a-divider"),o("a-result",{attrs:{title:"No jobs at the moment! Check back soon!"},scopedSlots:e._u([{key:"icon",fn:function(){return[o("img",{attrs:{width:"100%",src:"images/helper/pablo-come-back-later.png",alt:"Come Back Soon"}})]},proxy:!0}],null,!1,2519655662)})]],2)],1)])},i=[],r=(o("d81d"),{data:function(){return{hasJobs:!1,section:{title:"Job Board",description2:"We are a safe digital community for women to share and learn from each others experiences. We\tprovide workshops for organizations who wish to practice Diversity, Equity and Inclusion in\ttheir work culture. We also provide virtual mentorship for women. Lastly, we are not against\tfeminism rather we are working towards eliminating the need for feminists. We are in the 21st\tcentury, we need to think forward, appreciate the efforts the society has made towards\tpracticing equality and educate the future."},jobs:{engineering:[],design:[],marketing:[]},jobLabels:{locations:{"austin-texas":"Austin, TX",remote:"Remote","ames-ia":"Ames, IA"},types:{"part-time":"Part Time","full-time":"Full Time",temporary:"Temporary",volunteer:"Volunteer",contract:"Contract",freelance:"Freelance",internship:"Internship"},categories:{design:"Design",engineering:"Engineering",marketing:"Marketing"}},errorMessage:null}},beforeMount:function(){var e=this;this.$client.getItems("jobs").then((function(t){var o=t.data;o.length>0&&(e.hasJobs=!0,o.map((function(t){e.jobs[t.job_category].push(t)})))})).catch((function(t){e.errorMessage=t.message}))}}),s=r,a=o("2877"),c=Object(a["a"])(s,n,i,!1,null,null,null);t["default"]=c.exports},d81d:function(e,t,o){"use strict";var n=o("23e7"),i=o("b727").map,r=o("d039"),s=o("1dde"),a=s("map"),c=a&&!r((function(){[].map.call({length:-1,0:1},(function(e){throw e}))}));n({target:"Array",proto:!0,forced:!a||!c},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-072f2fb8.119fb8a5.js.map