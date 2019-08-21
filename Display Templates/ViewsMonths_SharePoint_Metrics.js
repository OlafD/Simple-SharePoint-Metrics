/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_cee8880f29384680b8cd3ad08faecec8(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_cee8880f29384680b8cd3ad08faecec8.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fSharePoint Metrics\u002fViewsMonths_SharePoint_Metrics.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'ViewCountLifetime':['ViewCountLifetime'], 'ViewsLifeTime':['ViewsLifeTime'], 'ViewsLifeTimeUniqueUsers':['ViewsLifeTimeUniqueUsers'], 'ViewsRecent':['ViewsRecent'], 'ViewsRecentUniqueUsers':['ViewsRecentUniqueUsers'], 'ViewsLast1Days':['ViewsLast1Days'], 'ViewsLast1DaysUniqueUsers':['ViewsLast1DaysUniqueUsers'], 'ViewsLast2Days':['ViewsLast2Days'], 'ViewsLast2DaysUniqueUsers':['ViewsLast2DaysUniqueUsers'], 'ViewsLast3Days':['ViewsLast3Days'], 'ViewsLast3DaysUniqueUsers':['ViewsLast3DaysUniqueUsers'], 'ViewsLast4Days':['ViewsLast4Days'], 'ViewsLast4DaysUniqueUsers':['ViewsLast4DaysUniqueUsers'], 'ViewsLast5Days':['ViewsLast5Days'], 'ViewsLast5DaysUniqueUsers':['ViewsLast5DaysUniqueUsers'], 'ViewsLast6Days':['ViewsLast6Days'], 'ViewsLast6DaysUniqueUsers':['ViewsLast6DaysUniqueUsers'], 'ViewsLast7Days':['ViewsLast7Days'], 'ViewsLast7DaysUniqueUsers':['ViewsLast7DaysUniqueUsers'], 'ViewsLastMonths1':['ViewsLastMonths1'], 'ViewsLastMonths1Unique':['ViewsLastMonths1Unique'], 'ViewsLastMonths2':['ViewsLastMonths2'], 'ViewsLastMonths2Unique':['ViewsLastMonths2Unique'], 'ViewsLastMonths3':['ViewsLastMonths3'], 'ViewsLastMonths3Unique':['ViewsLastMonths3Unique']};
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

			var viewsLast1Days = ctx.CurrentItem.ViewsLast1Days;
			var viewsLast1DaysUniqueUsers = ctx.CurrentItem.ViewsLast1DaysUniqueUsers;
			var viewsLast2Days = ctx.CurrentItem.ViewsLast2Days;
			var viewsLast2DaysUniqueUsers = ctx.CurrentItem.ViewsLast2DaysUniqueUsers;
			var viewsLast3Days = ctx.CurrentItem.ViewsLast3Days;
			var viewsLast3DaysUniqueUsers = ctx.CurrentItem.ViewsLast3DaysUniqueUsers;
			var viewsLast4Days = ctx.CurrentItem.ViewsLast4Days;
			var viewsLast4DaysUniqueUsers = ctx.CurrentItem.ViewsLast4DaysUniqueUsers;
			var viewsLast5Days = ctx.CurrentItem.ViewsLast5Days;
			var viewsLast5DaysUniqueUsers = ctx.CurrentItem.ViewsLast5DaysUniqueUsers;
			var viewsLast6Days = ctx.CurrentItem.ViewsLast6Days;
			var viewsLast6DaysUniqueUsers = ctx.CurrentItem.ViewsLast6DaysUniqueUsers;
			var viewsLast7Days = ctx.CurrentItem.ViewsLast7Days;
			var viewsLast7DaysUniqueUsers = ctx.CurrentItem.ViewsLast7DaysUniqueUsers;

			var viewsLastMonths1 = ctx.CurrentItem.ViewsLastMonths1;
			var viewsLastMonths1Unique = ctx.CurrentItem.ViewsLastMonths1Unique;
			var viewsLastMonths2 = ctx.CurrentItem.ViewsLastMonths2;
			var viewsLastMonths2Unique = ctx.CurrentItem.ViewsLastMonths2Unique;
			var viewsLastMonths3 = ctx.CurrentItem.ViewsLastMonths3;
			var viewsLastMonths3Unique = ctx.CurrentItem.ViewsLastMonths3Unique;
			
			var viewsLifetime = ctx.CurrentItem.ViewsLifeTime;
			var viewsLifetimeUniqueUsers = ctx.CurrentItem.ViewsLifeTimeUniqueUsers;
			var viewsRecent = ctx.CurrentItem.ViewsRecent;
			var viewsRecentUniqueUsers = ctx.CurrentItem.ViewsRecentUniqueUsers;
ms_outHtml.push(''
,'            <div id="', $htmlEncode(itemId) ,'" name="Item" data-displaytemplate="ViewsMonthsSharePointMetricsItem" class="ms-srch-item" onmouseover="', ctx.currentItem_ShowHoverPanelCallback ,'" onmouseout="', ctx.currentItem_HideHoverPanelCallback ,'">'
,'				<table border="0" style="width: 1100px">'
,'					<tr>'
,'						<td style="width: 700px; padding: 5px;">'
,'							', path ,''
,'						</td>'
,'						<td style="width: 250px; padding: 5px;">'
,'							', title ,''
,'						</td>'
,'						<td style="width: 25px; padding: 5px;">'
,'							', viewsLastMonths1 ,''
,'						</td>'
,'						<td style="width: 25px; padding: 5px;">'
,'							', viewsLastMonths1Unique ,''
,'						</td>'
,'						<td style="width: 25px; padding: 5px;">'
,'							', viewsLastMonths2 ,''
,'						</td>'
,'						<td style="width: 25px; padding: 5px;">'
,'							', viewsLastMonths2Unique ,''
,'						</td>'
,'						<td style="width: 25px; padding: 5px;">'
,'							', viewsLastMonths3 ,''
,'						</td>'
,'						<td style="width: 25px; padding: 5px;">'
,'							', viewsLastMonths3Unique ,''
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
function RegisterTemplate_cee8880f29384680b8cd3ad08faecec8() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_Default", DisplayTemplate_cee8880f29384680b8cd3ad08faecec8);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fSharePoint Metrics\u002fViewsMonths_SharePoint_Metrics.js", DisplayTemplate_cee8880f29384680b8cd3ad08faecec8);
}

}
RegisterTemplate_cee8880f29384680b8cd3ad08faecec8();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fSharePoint Metrics\u002fViewsMonths_SharePoint_Metrics.js"), RegisterTemplate_cee8880f29384680b8cd3ad08faecec8);
}