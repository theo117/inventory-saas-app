module.exports = [
"[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b0153a19d84ab0d0827df2d29fa2d23ff4147cbc":"getItems","406705747a9545b11aea9eb3e6ef6eadc9bf32f0d2":"updateItem","40766a76e1dfa9a94640275504df6a5465a82945f6":"deleteItem","40cf5f7e8d2f6ce930ffc7a69b9f19fe0b8de22c97":"addItem"},"",""] */ __turbopack_context__.s([
    "addItem",
    ()=>addItem,
    "deleteItem",
    ()=>deleteItem,
    "getItems",
    ()=>getItems,
    "updateItem",
    ()=>updateItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function addItem(formData) {
    const name = formData.get("name");
    const quantity = Number(formData.get("quantity"));
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");
    await supabase.from("items").insert({
        name,
        quantity,
        user_id: user.id
    });
}
async function deleteItem(formData) {
    const id = Number(formData.get("id"));
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");
    await supabase.from("items").delete().eq("id", id).eq("user_id", user.id);
}
async function updateItem(formData) {
    const id = Number(formData.get("id"));
    const name = formData.get("name");
    const quantity = Number(formData.get("quantity"));
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");
    await supabase.from("items").update({
        name,
        quantity
    }).eq("id", id).eq("user_id", user.id);
}
async function getItems() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");
    const { data } = await supabase.from("items").select("*").eq("user_id", user.id).order("id");
    return data;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addItem,
    deleteItem,
    updateItem,
    getItems
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addItem, "40cf5f7e8d2f6ce930ffc7a69b9f19fe0b8de22c97", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteItem, "40766a76e1dfa9a94640275504df6a5465a82945f6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateItem, "406705747a9545b11aea9eb3e6ef6eadc9bf32f0d2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getItems, "00b0153a19d84ab0d0827df2d29fa2d23ff4147cbc", null);
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "005b4deac13a0b8c16d5cf280aa14e7f3d3fe01960",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "00b0153a19d84ab0d0827df2d29fa2d23ff4147cbc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getItems"],
    "406705747a9545b11aea9eb3e6ef6eadc9bf32f0d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateItem"],
    "40766a76e1dfa9a94640275504df6a5465a82945f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteItem"],
    "40cf5f7e8d2f6ce930ffc7a69b9f19fe0b8de22c97",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addItem"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_7f0a0ab3._.js.map