/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_3c6cdc69cbfa4cc6a7f6573967791603(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_3c6cdc69cbfa4cc6a7f6573967791603.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fSharePoint Metrics\u002fViewsRecent_SharePoint_Metrics.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'ViewCountLifetime':['ViewCountLifetime'], 'ViewsLifeTime':['ViewsLifeTime'], 'ViewsLifeTimeUniqueUsers':['ViewsLifeTimeUniqueUsers'], 'ViewsRecent':['ViewsRecent'], 'ViewsRecentUniqueUsers':['ViewsRecentUniqueUsers']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
); 
        if(!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)){
            var id = ctx.ClientControl.get_nextUniqueId();
            var itemId = id + Srch.U.Ids.item;
			var hoverId = id + Srch.U.Ids.hover;
			var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default_HoverPanel.js";
            $setResultItem(itemId, ctx.CurrentItem);
			if(ctx.CurrentItem.IsContainer){
				ctx.CurrentItem.csr_Icon = Srch.U.getFolderIconUrl();
			}
			ctx.currentItem_ShowHoverPanelCallback = Srch.U.getShowHoverPanelCallback(itemId, hoverId, hoverUrl);
            ctx.currentItem_HideHoverPanelCallback = Srch.U.getHideHoverPanelCallback();
			
			var path = ctx.CurrentItem.Path;
			var title = ctx.CurrentItem.Title;
			var viewCountLifetime = ctx.CurrentItem.ViewCountLifetime;
			var viewsLifetime = ctx.CurrentItem.ViewsLifeTime;
			var viewsLifetimeUniqueUsers = ctx.CurrentItem.ViewsLifeTimeUniqueUsers;
			var viewsRecent = ctx.CurrentItem.ViewsRecent;
			var viewsRecentUniqueUsers = ctx.CurrentItem.ViewsRecentUniqueUsers;
ms_outHtml.push(''
,'            <div id="', $htmlEncode(itemId) ,'" name="Item" data-displaytemplate="ViewsRecentSharePointMetricsItem" class="ms-srch-item" onmouseover="', ctx.currentItem_ShowHoverPanelCallback ,'" onmouseout="', ctx.currentItem_HideHoverPanelCallback ,'">'
,'				<table border="0" style="width: 1150px">'
,'					<tr>'
,'						<td style="width: 700px; padding: 5px; vertical-align: text-top; overflow: hidden;">'
,'							', path ,''
,'						</td>'
,'						<td style="width: 250px; padding: 5px; vertical-align: text-top; overflow: hidden;">'
,'							', title ,''
,'						</td>'
,'						<td style="width: 50px; padding: 5px; vertical-align: text-top; overflow: hidden;">'
,'							', viewsLifetime ,''
,'						</td>'
,'						<td style="width: 50px; padding: 5px; vertical-align: text-top; overflow: hidden;">'
,'							', viewsLifetimeUniqueUsers ,''
,'						</td>'
,'						<td style="width: 50px; padding: 5px; vertical-align: text-top; overflow: hidden;">'
,'							', viewsRecent ,''
,'						</td>'
,'						<td style="width: 50px; padding: 5px; vertical-align: text-top; overflow: hidden;">'
,'							', viewsRecentUniqueUsers ,''
,'						</td>'
,'					</tr>'
,'				</table>'
,'            </div>'
); 
        } 
ms_outHtml.push(''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_3c6cdc69cbfa4cc6a7f6573967791603() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_Default", DisplayTemplate_3c6cdc69cbfa4cc6a7f6573967791603);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fSharePoint Metrics\u002fViewsRecent_SharePoint_Metrics.js", DisplayTemplate_3c6cdc69cbfa4cc6a7f6573967791603);
}

}
RegisterTemplate_3c6cdc69cbfa4cc6a7f6573967791603();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fSharePoint Metrics\u002fViewsRecent_SharePoint_Metrics.js"), RegisterTemplate_3c6cdc69cbfa4cc6a7f6573967791603);
}