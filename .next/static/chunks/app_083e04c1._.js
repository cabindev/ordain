(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx
__turbopack_context__.s({
    "AlcoholReductionBarChart": (()=>AlcoholReductionBarChart),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__graphic$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/export/api/graphic.js [app-client] (ecmascript) <export * as graphic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript) <export install as TooltipComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript) <export install as LegendComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript) <export install as TitleComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript) <export install as GridComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript) <export install as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript) <export install as CanvasRenderer>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Register necessary components
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__["TooltipComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__["LegendComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__["TitleComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__["GridComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__["BarChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__["CanvasRenderer"]
]);
function AlcoholReductionBarChart({ data }) {
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlcoholReductionBarChart.useEffect": ()=>{
            if (!data || !chartRef.current) return;
            // แปลงข้อมูลสำหรับกราฟแท่ง
            const chartData = [
                {
                    name: 'งานบวชทั้งหมด',
                    value: parseInt(data.total) || 0
                },
                {
                    name: 'งานบวชในวัด',
                    value: parseInt(data.templeEvents) || 0
                },
                {
                    name: 'งานบวชในชุมชน',
                    value: parseInt(data.communityEvents) || 0
                }
            ];
            // สร้าง instance ของ ECharts
            const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"])(chartRef.current);
            // กำหนดตัวเลือกการแสดงผลใหม่ให้สดใสขึ้น
            const option = {
                title: {
                    text: 'การลดการบริโภคเครื่องดื่มแอลกอฮอล์',
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#FF7E33'
                    },
                    left: 'center',
                    top: 10
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: {
                        "AlcoholReductionBarChart.useEffect": function(params) {
                            const data = params[0];
                            return `${data.name}: ${new Intl.NumberFormat('th-TH').format(data.value)} งาน`;
                        }
                    }["AlcoholReductionBarChart.useEffect"],
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '8%',
                    top: '25%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: chartData.map({
                        "AlcoholReductionBarChart.useEffect": (item)=>item.name
                    }["AlcoholReductionBarChart.useEffect"]),
                    axisLabel: {
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 12,
                        interval: 0,
                        rotate: 0,
                        color: '#6B4C15'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#FF9E5C'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: {
                            "AlcoholReductionBarChart.useEffect": function(value) {
                                return new Intl.NumberFormat('th-TH').format(value);
                            }
                        }["AlcoholReductionBarChart.useEffect"],
                        fontFamily: 'Kanit, sans-serif',
                        color: '#6B4C15'
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 126, 51, 0.2)',
                            type: 'dashed'
                        }
                    }
                },
                series: [
                    {
                        name: 'จำนวนงาน',
                        type: 'bar',
                        barWidth: '60%',
                        data: chartData.map({
                            "AlcoholReductionBarChart.useEffect": (item, index)=>({
                                    value: item.value,
                                    itemStyle: {
                                        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__graphic$3e$__["graphic"].LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: '#FF7E33'
                                            },
                                            {
                                                offset: 1,
                                                color: '#FFBB77'
                                            }
                                        ]),
                                        borderRadius: [
                                            8,
                                            8,
                                            0,
                                            0
                                        ],
                                        shadowColor: 'rgba(255, 126, 51, 0.3)',
                                        shadowBlur: 10
                                    }
                                })
                        }["AlcoholReductionBarChart.useEffect"]),
                        label: {
                            show: true,
                            position: 'top',
                            formatter: {
                                "AlcoholReductionBarChart.useEffect": function(params) {
                                    return new Intl.NumberFormat('th-TH').format(params.value);
                                }
                            }["AlcoholReductionBarChart.useEffect"],
                            fontFamily: 'Kanit, sans-serif',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#FF7E33'
                        },
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(255, 158, 92, 0.1)',
                            borderRadius: [
                                6,
                                6,
                                0,
                                0
                            ]
                        }
                    }
                ],
                // เพิ่มเอฟเฟกต์เงา
                animation: true,
                animationDuration: 1000,
                animationEasing: 'elasticOut'
            };
            // แสดงกราฟ
            chart.setOption(option);
            // Resize observer สำหรับการทำให้กราฟ responsive
            const resizeObserver = new ResizeObserver({
                "AlcoholReductionBarChart.useEffect": ()=>{
                    chart.resize();
                }
            }["AlcoholReductionBarChart.useEffect"]);
            resizeObserver.observe(chartRef.current);
            return ({
                "AlcoholReductionBarChart.useEffect": ()=>{
                    resizeObserver.disconnect();
                    chart.dispose();
                }
            })["AlcoholReductionBarChart.useEffect"];
        }
    }["AlcoholReductionBarChart.useEffect"], [
        data
    ]);
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyData"], {
            title: "ไม่พบข้อมูลการลดการบริโภค",
            message: "ไม่สามารถแสดงข้อมูลการลดการบริโภคเครื่องดื่มแอลกอฮอล์"
        }, void 0, false, {
            fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
            lineNumber: 172,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#FFEFEA] to-[#FFC8B0] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-[#FF9E5C]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-[#FF7E33] flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWineBottle"], {
                            className: "mr-2"
                        }, void 0, false, {
                            fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        " การลดการบริโภคเครื่องดื่มแอลกอฮอล์"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-72",
                    ref: chartRef
                }, void 0, false, {
                    fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 bg-[#FFEFEA] flex justify-between border-t border-[#FF9E5C]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-[#6B4C15] font-medium",
                        children: [
                            "งานบวชทั้งหมด: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#FF7E33]",
                                children: new Intl.NumberFormat('th-TH').format(parseInt(data.total) || 0)
                            }, void 0, false, {
                                fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                                lineNumber: 186,
                                columnNumber: 77
                            }, this),
                            " งาน"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-[#6B4C15] font-medium",
                        children: [
                            "งานบวชในวัด: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#FF7E33]",
                                children: new Intl.NumberFormat('th-TH').format(parseInt(data.templeEvents) || 0)
                            }, void 0, false, {
                                fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                                lineNumber: 187,
                                columnNumber: 75
                            }, this),
                            " งาน"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(AlcoholReductionBarChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = AlcoholReductionBarChart;
const __TURBOPACK__default__export__ = AlcoholReductionBarChart;
var _c;
__turbopack_context__.k.register(_c, "AlcoholReductionBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/ordain/components/ordainChart/RegionalPieChart.tsx
__turbopack_context__.s({
    "RegionalPieChart": (()=>RegionalPieChart),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript) <export install as TooltipComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript) <export install as LegendComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript) <export install as TitleComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/chart/pie/install.js [app-client] (ecmascript) <export install as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript) <export install as CanvasRenderer>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Register necessary components
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__["TooltipComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__["LegendComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__["TitleComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PieChart$3e$__["PieChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__["CanvasRenderer"]
]);
function RegionalPieChart({ data }) {
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // กำหนดสีที่สดใสและสวยงามมากขึ้น
    const COLORS = [
        '#D4AF37',
        '#6B4C15',
        '#FF7E33',
        '#EACE5C',
        '#9f7f24',
        '#FF9E5C',
        '#4d370f',
        '#b3872f'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RegionalPieChart.useEffect": ()=>{
            if (!data || data.length === 0 || !chartRef.current) return;
            // สร้าง instance ของ ECharts
            const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"])(chartRef.current);
            // กำหนดตัวเลือกการแสดงผลใหม่ให้สดใสขึ้น
            const option = {
                title: {
                    text: 'สัดส่วนรายภูมิภาค',
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#D4AF37'
                    },
                    left: 'center',
                    top: 10
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)',
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif'
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: '#D4AF37',
                    borderWidth: 1,
                    textStyle: {
                        color: '#6B4C15'
                    },
                    extraCssText: 'box-shadow: 0 4px 8px rgba(212, 175, 55, 0.2);'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    top: 'middle',
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 12,
                        color: '#6B4C15'
                    },
                    itemGap: 10,
                    itemWidth: 15,
                    itemHeight: 10,
                    icon: 'roundRect'
                },
                series: [
                    {
                        name: 'จำนวนพื้นที่',
                        type: 'pie',
                        radius: [
                            '40%',
                            '75%'
                        ],
                        center: [
                            '60%',
                            '50%'
                        ],
                        avoidLabelOverlap: true,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
                            shadowBlur: 10,
                            shadowColor: 'rgba(212, 175, 55, 0.2)'
                        },
                        label: {
                            show: true,
                            formatter: '{b}: {d}%',
                            fontFamily: 'Kanit, sans-serif',
                            fontSize: 12,
                            color: '#6B4C15',
                            fontWeight: 'bold'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: '#D4AF37'
                            },
                            itemStyle: {
                                shadowBlur: 20,
                                shadowColor: 'rgba(212, 175, 55, 0.5)'
                            }
                        },
                        labelLine: {
                            show: true,
                            length: 15,
                            length2: 10,
                            smooth: true
                        },
                        data: data.map({
                            "RegionalPieChart.useEffect": (item, index)=>({
                                    name: item.name,
                                    value: item.value,
                                    itemStyle: {
                                        color: COLORS[index % COLORS.length]
                                    }
                                })
                        }["RegionalPieChart.useEffect"]),
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDuration: 1000
                    }
                ]
            };
            // แสดงกราฟ
            chart.setOption(option);
            // Resize observer สำหรับการทำให้กราฟ responsive
            const resizeObserver = new ResizeObserver({
                "RegionalPieChart.useEffect": ()=>{
                    chart.resize();
                }
            }["RegionalPieChart.useEffect"]);
            resizeObserver.observe(chartRef.current);
            return ({
                "RegionalPieChart.useEffect": ()=>{
                    resizeObserver.disconnect();
                    chart.dispose();
                }
            })["RegionalPieChart.useEffect"];
        }
    }["RegionalPieChart.useEffect"], [
        data
    ]);
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyData"], {
            title: "ไม่พบข้อมูลภูมิภาค",
            message: "ไม่สามารถแสดงข้อมูลสัดส่วนรายภูมิภาค"
        }, void 0, false, {
            fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
            lineNumber: 162,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#F9F3D9] to-[#EFE3AA] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-[#D4AF37]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-[#6B4C15] flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                            className: "mr-2 text-[#D4AF37]"
                        }, void 0, false, {
                            fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        " สัดส่วนรายภูมิภาค"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    ref: chartRef
                }, void 0, false, {
                    fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 bg-[#F9F3D9] text-sm text-[#6B4C15] text-center border-t border-[#D4AF37]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: "ข้อมูลการกระจายตัวของพื้นที่โครงการบวชสร้างสุขตามภูมิภาค"
                    }, void 0, false, {
                        fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs diagonal-pattern rounded-md p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#9f7f24]",
                            children: [
                                "ข้อมูลรวมจาก ",
                                data.length,
                                " ภูมิภาคทั่วประเทศ"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(RegionalPieChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = RegionalPieChart;
const __TURBOPACK__default__export__ = RegionalPieChart;
var _c;
__turbopack_context__.k.register(_c, "RegionalPieChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/ordain/components/ordainChart/SavingsBarChart.tsx
__turbopack_context__.s({
    "SavingsBarChart": (()=>SavingsBarChart),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__graphic$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/export/api/graphic.js [app-client] (ecmascript) <export * as graphic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript) <export install as TooltipComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript) <export install as LegendComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript) <export install as TitleComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript) <export install as GridComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript) <export install as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript) <export install as CanvasRenderer>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Register necessary components
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__["TooltipComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__["LegendComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__["TitleComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__["GridComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__["BarChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__["CanvasRenderer"]
]);
function SavingsBarChart({ data }) {
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SavingsBarChart.useEffect": ()=>{
            if (!data || !chartRef.current) return;
            // แปลงข้อมูลสำหรับกราฟแท่ง
            const chartData = [
                {
                    name: 'ประหยัดค่าเหล้าเบียร์',
                    value: parseInt(data.alcoholSavings) || 0
                },
                {
                    name: 'ประหยัดค่าใช้จ่ายต่อการบวชพระ',
                    value: parseInt(data.expensePerMonk) || 0
                },
                {
                    name: 'ประหยัดรวม',
                    value: (parseInt(data.alcoholSavings) || 0) + (parseInt(data.expensePerMonk) || 0)
                }
            ];
            // สร้าง instance ของ ECharts
            const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"])(chartRef.current);
            // กำหนดตัวเลือกการแสดงผล
            const option = {
                title: {
                    text: 'การประหยัดค่าใช้จ่าย (บาท)',
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#D4AF37'
                    },
                    left: 'center',
                    top: 10
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: {
                        "SavingsBarChart.useEffect": function(params) {
                            const data = params[0];
                            return `${data.name}: ${new Intl.NumberFormat('th-TH').format(data.value)} บาท`;
                        }
                    }["SavingsBarChart.useEffect"],
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '8%',
                    top: '25%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: chartData.map({
                        "SavingsBarChart.useEffect": (item)=>item.name
                    }["SavingsBarChart.useEffect"]),
                    axisLabel: {
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 12,
                        interval: 0,
                        rotate: 0,
                        color: '#6B4C15'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#D4AF37'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: {
                            "SavingsBarChart.useEffect": function(value) {
                                return new Intl.NumberFormat('th-TH').format(value);
                            }
                        }["SavingsBarChart.useEffect"],
                        fontFamily: 'Kanit, sans-serif',
                        color: '#6B4C15'
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(212, 175, 55, 0.2)',
                            type: 'dashed'
                        }
                    }
                },
                series: [
                    {
                        name: 'จำนวนเงิน',
                        type: 'bar',
                        barWidth: '60%',
                        data: chartData.map({
                            "SavingsBarChart.useEffect": (item, index)=>({
                                    value: item.value,
                                    itemStyle: {
                                        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__graphic$3e$__["graphic"].LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: index === 2 ? '#D4AF37' : index === 0 ? '#FF7E33' : '#6B4C15'
                                            },
                                            {
                                                offset: 1,
                                                color: index === 2 ? '#EACE5C' : index === 0 ? '#FFBB77' : '#9f7f24'
                                            }
                                        ]),
                                        borderRadius: [
                                            8,
                                            8,
                                            0,
                                            0
                                        ],
                                        shadowColor: 'rgba(212, 175, 55, 0.3)',
                                        shadowBlur: 10
                                    }
                                })
                        }["SavingsBarChart.useEffect"]),
                        label: {
                            show: true,
                            position: 'top',
                            formatter: {
                                "SavingsBarChart.useEffect": function(params) {
                                    return new Intl.NumberFormat('th-TH').format(params.value);
                                }
                            }["SavingsBarChart.useEffect"],
                            fontFamily: 'Kanit, sans-serif',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#6B4C15'
                        },
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(212, 175, 55, 0.1)',
                            borderRadius: [
                                6,
                                6,
                                0,
                                0
                            ]
                        }
                    }
                ],
                animation: true,
                animationDuration: 1000,
                animationEasing: 'elasticOut'
            };
            // แสดงกราฟ
            chart.setOption(option);
            // Resize observer สำหรับการทำให้กราฟ responsive
            const resizeObserver = new ResizeObserver({
                "SavingsBarChart.useEffect": ()=>{
                    chart.resize();
                }
            }["SavingsBarChart.useEffect"]);
            resizeObserver.observe(chartRef.current);
            return ({
                "SavingsBarChart.useEffect": ()=>{
                    resizeObserver.disconnect();
                    chart.dispose();
                }
            })["SavingsBarChart.useEffect"];
        }
    }["SavingsBarChart.useEffect"], [
        data
    ]);
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyData"], {
            title: "ไม่พบข้อมูลการประหยัด",
            message: "ไม่สามารถแสดงข้อมูลการประหยัดค่าใช้จ่าย"
        }, void 0, false, {
            fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
            lineNumber: 170,
            columnNumber: 12
        }, this);
    }
    const totalSavings = (parseInt(data.alcoholSavings) || 0) + (parseInt(data.expensePerMonk) || 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#F9F3D9] to-[#EACE5C] bg-opacity-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-[#D4AF37]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-[#6B4C15] flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegMoneyBillAlt"], {
                            className: "mr-2 text-[#D4AF37]"
                        }, void 0, false, {
                            fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        " การประหยัดค่าใช้จ่าย"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    ref: chartRef
                }, void 0, false, {
                    fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 bg-[#F9F3D9] text-center border-t border-[#D4AF37]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-[#6B4C15] font-medium",
                    children: [
                        "สังคมไทยประหยัดค่าใช้จ่ายรวมกว่า ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-[#D4AF37]",
                            children: new Intl.NumberFormat('th-TH').format(totalSavings)
                        }, void 0, false, {
                            fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
                            lineNumber: 187,
                            columnNumber: 44
                        }, this),
                        " บาท"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(SavingsBarChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = SavingsBarChart;
const __TURBOPACK__default__export__ = SavingsBarChart;
var _c;
__turbopack_context__.k.register(_c, "SavingsBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/ordain/components/ordainChart/AreaImplementationChart.tsx
__turbopack_context__.s({
    "AreaImplementationChart": (()=>AreaImplementationChart),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__graphic$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/export/api/graphic.js [app-client] (ecmascript) <export * as graphic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript) <export install as TooltipComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript) <export install as LegendComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript) <export install as TitleComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript) <export install as GridComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/chart/pie/install.js [app-client] (ecmascript) <export install as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript) <export install as CanvasRenderer>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Register necessary components
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__["TooltipComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__["LegendComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__["TitleComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__["GridComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__PieChart$3e$__["PieChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__["CanvasRenderer"]
]);
function AreaImplementationChart({ data }) {
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AreaImplementationChart.useEffect": ()=>{
            if (!chartRef.current || !data.implementationArea || !data.policyExpansionArea) return;
            // แปลงข้อมูลสำหรับกราฟวงกลม
            const chartData = [
                {
                    value: parseInt(data.implementationArea.count) || 0,
                    name: 'พื้นที่ดำเนินการ'
                },
                {
                    value: parseInt(data.policyExpansionArea.count) || 0,
                    name: 'พื้นที่ขยายผล'
                }
            ];
            // สร้าง instance ของ ECharts
            const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"])(chartRef.current);
            // กำหนดตัวเลือกการแสดงผล
            const option = {
                title: {
                    text: 'พื้นที่การดำเนินงาน',
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#6B4C15'
                    },
                    left: 'center',
                    top: 10
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)',
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif'
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    top: 'middle',
                    textStyle: {
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 12,
                        color: '#6B4C15'
                    }
                },
                series: [
                    {
                        name: 'จำนวนพื้นที่',
                        type: 'pie',
                        radius: [
                            '30%',
                            '70%'
                        ],
                        center: [
                            '60%',
                            '50%'
                        ],
                        avoidLabelOverlap: true,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: true,
                            formatter: '{b}: {c} {d}%',
                            fontFamily: 'Kanit, sans-serif'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 16,
                                fontWeight: 'bold'
                            },
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        data: [
                            {
                                value: chartData[0].value,
                                name: chartData[0].name,
                                itemStyle: {
                                    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__graphic$3e$__["graphic"].LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: '#FFBB77'
                                        },
                                        {
                                            offset: 1,
                                            color: '#FF7E33'
                                        }
                                    ])
                                }
                            },
                            {
                                value: chartData[1].value,
                                name: chartData[1].name,
                                itemStyle: {
                                    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__graphic$3e$__["graphic"].LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: '#EACE5C'
                                        },
                                        {
                                            offset: 1,
                                            color: '#D4AF37'
                                        }
                                    ])
                                }
                            }
                        ],
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDuration: 1000
                    }
                ]
            };
            // แสดงกราฟ
            chart.setOption(option);
            // Resize observer สำหรับการทำให้กราฟ responsive
            const resizeObserver = new ResizeObserver({
                "AreaImplementationChart.useEffect": ()=>{
                    chart.resize();
                }
            }["AreaImplementationChart.useEffect"]);
            resizeObserver.observe(chartRef.current);
            return ({
                "AreaImplementationChart.useEffect": ()=>{
                    resizeObserver.disconnect();
                    chart.dispose();
                }
            })["AreaImplementationChart.useEffect"];
        }
    }["AreaImplementationChart.useEffect"], [
        data
    ]);
    if (!data.implementationArea || !data.policyExpansionArea) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyData"], {
            title: "ไม่พบข้อมูลพื้นที่",
            message: "ไม่สามารถแสดงข้อมูลพื้นที่ดำเนินการ"
        }, void 0, false, {
            fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
            lineNumber: 158,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#F9F3D9] to-[#EFE3AA] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-[#EFE3AA]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-[#6B4C15] flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                            className: "mr-2"
                        }, void 0, false, {
                            fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        " พื้นที่การดำเนินงาน"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-72",
                    ref: chartRef
                }, void 0, false, {
                    fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 bg-[#D4AF37] flex justify-between border-t border-[#EFE3AA]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-[#6B4C15] font-medium",
                        children: [
                            "พื้นที่ดำเนินการ: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#EFE3AA]",
                                children: new Intl.NumberFormat('th-TH').format(parseInt(data.implementationArea.count) || 0)
                            }, void 0, false, {
                                fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                                lineNumber: 173,
                                columnNumber: 29
                            }, this),
                            " ",
                            data.implementationArea.unit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-[#6B4C15] font-medium",
                        children: [
                            "พื้นที่ขยายผล: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#D4AF37]",
                                children: new Intl.NumberFormat('th-TH').format(parseInt(data.policyExpansionArea.count) || 0)
                            }, void 0, false, {
                                fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                                lineNumber: 176,
                                columnNumber: 26
                            }, this),
                            " ",
                            data.policyExpansionArea.unit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(AreaImplementationChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = AreaImplementationChart;
const __TURBOPACK__default__export__ = AreaImplementationChart;
var _c;
__turbopack_context__.k.register(_c, "AreaImplementationChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/ordain/components/ordainChart/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/ordain/components/ordainChart/index.ts
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AlcoholReductionBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$RegionalPieChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$SavingsBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AreaImplementationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/ordain/components/ordainChart/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AlcoholReductionBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$RegionalPieChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$SavingsBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AreaImplementationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx [app-client] (ecmascript) <export default as RegionalPieChart>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RegionalPieChart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$RegionalPieChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$RegionalPieChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx [app-client] (ecmascript)");
}}),
"[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx [app-client] (ecmascript) <export default as AlcoholReductionBarChart>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlcoholReductionBarChart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AlcoholReductionBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AlcoholReductionBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx [app-client] (ecmascript)");
}}),
"[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx [app-client] (ecmascript) <export default as SavingsBarChart>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SavingsBarChart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$SavingsBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$SavingsBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx [app-client] (ecmascript)");
}}),
"[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx [app-client] (ecmascript) <export default as AreaImplementationChart>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AreaImplementationChart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AreaImplementationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AreaImplementationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx [app-client] (ecmascript)");
}}),
"[project]/app/components/OrdainStats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/components/OrdainStats.tsx
__turbopack_context__.s({
    "default": (()=>OrdainStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$RegionalPieChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RegionalPieChart$3e$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/RegionalPieChart.tsx [app-client] (ecmascript) <export default as RegionalPieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AlcoholReductionBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlcoholReductionBarChart$3e$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx [app-client] (ecmascript) <export default as AlcoholReductionBarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$SavingsBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SavingsBarChart$3e$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/SavingsBarChart.tsx [app-client] (ecmascript) <export default as SavingsBarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AreaImplementationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AreaImplementationChart$3e$__ = __turbopack_context__.i("[project]/app/ordain/components/ordainChart/AreaImplementationChart.tsx [app-client] (ecmascript) <export default as AreaImplementationChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// สร้าง Card สำหรับแสดงข้อมูลสถิติ
const StatCard = ({ icon, title, value, unit, description, bgClass, iconClass })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${bgClass} rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-center h-14 w-14 rounded-lg ${iconClass} text-white`,
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/app/components/OrdainStats.tsx",
                    lineNumber: 81,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-4 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-[var(--brown-primary)] truncate",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/OrdainStats.tsx",
                            lineNumber: 85,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-bold text-[var(--brown-dark)]",
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                    lineNumber: 87,
                                    columnNumber: 11
                                }, this),
                                unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-1 text-sm text-gray-600 mb-1",
                                    children: unit
                                }, void 0, false, {
                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                    lineNumber: 88,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/OrdainStats.tsx",
                            lineNumber: 86,
                            columnNumber: 9
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-gray-600",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/app/components/OrdainStats.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/OrdainStats.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/OrdainStats.tsx",
            lineNumber: 80,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/OrdainStats.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, this);
_c = StatCard;
// สร้าง Card สำหรับแสดงข้อมูลผลสำเร็จ
const SuccessItem = ({ title, value, unit })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-shrink-0 h-6 w-6 rounded-full bg-[var(--gold-primary)] flex items-center justify-center text-white text-xs mt-0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {}, void 0, false, {
                    fileName: "[project]/app/components/OrdainStats.tsx",
                    lineNumber: 110,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/OrdainStats.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-3 text-[var(--brown-primary)]",
                children: [
                    title,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-[var(--gold-dark)]",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 114,
                        columnNumber: 7
                    }, this),
                    " ",
                    unit
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/OrdainStats.tsx",
                lineNumber: 112,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/OrdainStats.tsx",
        lineNumber: 108,
        columnNumber: 3
    }, this);
_c1 = SuccessItem;
function OrdainStats({ hideTitle = false }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdainStats.useEffect": ()=>{
            async function fetchData() {
                try {
                    setLoading(true);
                    // เพิ่ม timestamp เพื่อป้องกันการแคชข้อมูล
                    const timestamp = new Date().getTime();
                    const response = await fetch(`/api/ordain?t=${timestamp}`, {
                        cache: 'no-store',
                        headers: {
                            'Pragma': 'no-cache',
                            'Cache-Control': 'no-cache'
                        }
                    });
                    const result = await response.json();
                    console.log(`Data fetched at ${new Date().toISOString()}:`, result);
                    if (response.ok && result.data) {
                        setData(result.data);
                    } else {
                        console.error('API Error:', result);
                        setError(result.error?.message || 'เกิดข้อผิดพลาดในการดึงข้อมูล');
                    }
                } catch (err) {
                    console.error('Fetch Error:', err);
                    setError('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
                } finally{
                    setLoading(false);
                }
            }
            fetchData();
        }
    }["OrdainStats.useEffect"], []);
    // แสดงสถานะ Loading
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "large"
        }, void 0, false, {
            fileName: "[project]/app/components/OrdainStats.tsx",
            lineNumber: 164,
            columnNumber: 12
        }, this);
    }
    // แสดงข้อผิดพลาด
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorDisplay"], {
            message: "ไม่สามารถโหลดข้อมูลได้",
            details: error,
            size: "large"
        }, void 0, false, {
            fileName: "[project]/app/components/OrdainStats.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    // แสดงเมื่อไม่พบข้อมูล
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyData"], {
            title: "ไม่พบข้อมูล",
            message: "ขออภัย ระบบไม่พบข้อมูลโครงการบวชสร้างสุข"
        }, void 0, false, {
            fileName: "[project]/app/components/OrdainStats.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this);
    }
    // ฟังก์ชันสำหรับแปลงตัวเลขให้เป็นรูปแบบที่อ่านง่าย
    const formatNumber = (num)=>{
        if (!num) return "0";
        return new Intl.NumberFormat("th-TH").format(parseInt(num));
    };
    // คำนวณการประหยัดค่าใช้จ่ายรวม
    const getTotalSavings = ()=>{
        if (!data.savings) return "0";
        return formatNumber((parseInt(data.savings.alcoholSavings || "0") + parseInt(data.savings.expensePerMonk || "0")).toString());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: [
            !hideTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gold-gradient bg-clip-text text-transparent",
                            children: data.projectName
                        }, void 0, false, {
                            fileName: "[project]/app/components/OrdainStats.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    data.projectSubtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-[var(--brown-primary)] max-w-3xl mx-auto",
                        children: data.projectSubtitle
                    }, void 0, false, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 w-24 h-1 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] mx-auto rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/OrdainStats.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",
                children: [
                    data.alcoholReduction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AlcoholReductionBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlcoholReductionBarChart$3e$__["AlcoholReductionBarChart"], {
                        data: data.alcoholReduction
                    }, void 0, false, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    data.regionalData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$RegionalPieChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RegionalPieChart$3e$__["RegionalPieChart"], {
                        data: data.regionalData
                    }, void 0, false, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/OrdainStats.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",
                children: [
                    data.implementationArea && data.policyExpansionArea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$AreaImplementationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AreaImplementationChart$3e$__["AreaImplementationChart"], {
                        data: data
                    }, void 0, false, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    data.savings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ordain$2f$components$2f$ordainChart$2f$SavingsBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SavingsBarChart$3e$__["SavingsBarChart"], {
                        data: data.savings
                    }, void 0, false, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/OrdainStats.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-lg overflow-hidden border border-[var(--orange-light)] border-opacity-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-b border-[var(--orange-light)] bg-gradient-to-r from-[var(--orange-light)] to-white bg-opacity-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-[var(--brown-primary)] flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPrayingHands"], {
                                            className: "mr-2 text-[var(--orange-primary)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        " พระต้นแบบและนโยบาย"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/OrdainStats.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-6",
                                children: [
                                    data.modelMonks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[var(--gray-light)] rounded-lg p-6 mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 h-12 w-12 rounded-full bg-[var(--gold-primary)] flex items-center justify-center text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPrayingHands"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg font-medium text-[var(--brown-primary)]",
                                                            children: "จำนวนพระต้นแบบที่ผ่านกระบวนการบวชสร้างสุข"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex items-baseline",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-bold text-[var(--gold-dark)]",
                                                                    children: formatNumber(data.modelMonks.count)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-2 text-gray-600",
                                                                    children: data.modelMonks.unit || "รูป"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 text-sm text-gray-600",
                                                            children: "พระต้นแบบที่ยึดพระธรรมวินัย ประหยัด เรียบง่าย"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyData"], {
                                        title: "ไม่พบข้อมูลพระต้นแบบ",
                                        size: "small"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this),
                                    data.policy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[var(--gray-light)] rounded-lg p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 h-12 w-12 rounded-full bg-[var(--orange-primary)] flex items-center justify-center text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFileSignature"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg font-medium text-[var(--brown-primary)]",
                                                            children: "นโยบาย/กติกา/สภาพแวดล้อม"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex items-baseline",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-bold text-[var(--orange-primary)]",
                                                                    children: formatNumber(data.policy.count)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-2 text-gray-600",
                                                                    children: data.policy.unit || "พื้นที่"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 text-sm text-gray-600",
                                                            children: "ที่เอื้อต่อการปรับเปลี่ยนค่านิยมการจัดงานบวช"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyData"], {
                                        title: "ไม่พบข้อมูลนโยบาย",
                                        size: "small"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/OrdainStats.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 text-sm text-[var(--brown-primary)] border-t border-[var(--orange-light)] border-opacity-30 bg-[var(--orange-light)] bg-opacity-10",
                                children: "นโยบายและสภาพแวดล้อมที่เอื้อต่อการปรับเปลี่ยนค่านิยมการจัดงานบวช"
                            }, void 0, false, {
                                fileName: "[project]/app/components/OrdainStats.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-lg overflow-hidden border border-[var(--gold-primary)] diagonal-pattern",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-b border-[var(--gold-primary)] bg-[var(--gold-primary)] bg-opacity-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-[var(--brown-dark)] flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrophy"], {
                                            className: "mr-2 text-[var(--gold-primary)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        " สรุปผลสำเร็จของโครงการ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/OrdainStats.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-6 bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg p-6 border border-[var(--gold-light)] border-opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-medium text-[var(--brown-primary)] mb-6 gold-gradient inline-block",
                                            children: "รูปธรรมความสำเร็จ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: [
                                                data.implementationArea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessItem, {
                                                    title: "พื้นที่ดำเนินการโครงการบวชสร้างสุข",
                                                    value: formatNumber(data.implementationArea.count),
                                                    unit: "พื้นที่"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 19
                                                }, this),
                                                data.policyExpansionArea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessItem, {
                                                    title: "พื้นที่ขยายผลระดับนโยบาย",
                                                    value: formatNumber(data.policyExpansionArea.count),
                                                    unit: "พื้นที่"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this),
                                                data.modelMonks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessItem, {
                                                    title: "พระต้นแบบที่ผ่านกระบวนการบวชสร้างสุข",
                                                    value: formatNumber(data.modelMonks.count),
                                                    unit: "รูป"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                data.alcoholReduction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessItem, {
                                                    title: "ลดการบริโภคเครื่องดื่มแอลกอฮอล์ในงานบวช",
                                                    value: formatNumber(data.alcoholReduction.total),
                                                    unit: "งาน"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this),
                                                data.savings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessItem, {
                                                    title: "ประหยัดค่าใช้จ่ายรวม",
                                                    value: getTotalSavings(),
                                                    unit: "บาท"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 19
                                                }, this),
                                                data.policy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessItem, {
                                                    title: "นโยบาย/กติกา/สภาพแวดล้อมที่เอื้อต่อการปรับเปลี่ยนค่านิยม",
                                                    value: formatNumber(data.policy.count),
                                                    unit: "พื้นที่"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, this),
                                                data.regionalData && data.regionalData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessItem, {
                                                    title: "พื้นที่ดำเนินการใน",
                                                    value: data.regionalData.length.toString(),
                                                    unit: "ภูมิภาคทั่วประเทศ"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/OrdainStats.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/OrdainStats.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/OrdainStats.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 bg-[var(--gold-primary)] bg-opacity-10 text-center font-medium text-[var(--brown-primary)] border-t border-[var(--gold-primary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold gold-gradient inline-block",
                                        children: "งานบวชสร้างสุขต้นแบบ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this),
                                    ' "ยึดพระธรรมวินัย ประหยัด เรียบง่าย" ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "sm:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                        lineNumber: 385,
                                        columnNumber: 136
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "(ปลอดเหล้า ปลอดปัจจัยเสี่ยง ลดผลกระทบความรุนแรง)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OrdainStats.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/OrdainStats.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/OrdainStats.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/OrdainStats.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-1 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] rounded-full mt-8 mb-2 opacity-50"
            }, void 0, false, {
                fileName: "[project]/app/components/OrdainStats.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/OrdainStats.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s(OrdainStats, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
_c2 = OrdainStats;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "SuccessItem");
__turbopack_context__.k.register(_c2, "OrdainStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/OrdainStats.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/components/OrdainStats.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=app_083e04c1._.js.map