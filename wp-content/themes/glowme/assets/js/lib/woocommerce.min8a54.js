!function(e){"use strict";var t=e(window),a=e(document),i=e("html"),o=e("html,body"),l=e("body"),r=function(){this.General=this.General.bind(this),this.QuickView=this.QuickView.bind(this),this.Wishlist=this.Wishlist.bind(this),this.Compare=this.Compare.bind(this),this.AjaxFilter=this.AjaxFilter.bind(this),this.AutoInit=this.AutoInit.bind(this)};let s=(t,a)=>new LaStudio.global.AjaxHandler(e.extend({handlerId:t,url:la_theme_config.ajax_url,handlerSettings:{data_type:"json",type:"POST",nonce:la_theme_config.ajaxGlobal.nonce}},a));r.prototype.AutoInit=function(){this.General(),this.QuickView(),this.Wishlist(),this.Compare(),this.AjaxFilter()},r.prototype.General=function(){a.trigger("reinit_la_swatches"),e(document).on("click touchend",".lawl--continue",function(t){t.preventDefault(),e.featherlight.close()}),e("#customer_login .input-text").each(function(){e(this).closest(".form-row").find("label").length&&e(this).attr("placeholder",e(this).closest(".form-row").find("label").text())}),e(window).on("resize",function(){setTimeout(function(){e("body:not(.lakit--enabled) .woocommerce-product-gallery").each(function(){var t=e(".woocommerce-product-gallery__wrapper",e(this)).height()+"px";e(this).css("--singleproduct-thumbs-height",t),e(".flex-viewport",e(this)).css("height",t)})},50)});var t,i,o=null;e(document.body).on("wc_fragments_refreshed updated_wc_div wc_fragments_loaded",function(t){clearTimeout(o),o=setTimeout(function(){LaStudio.global.eventManager.publish("LaStudio:Component:LazyLoadImage",[e(".widget_shopping_cart_content")])},100)}),a.on("click",".quantity .qty-minus",function(t){t.preventDefault();let a=e(this).siblings(".qty"),i=parseInt(a.val()),o=parseInt(a.attr("min")||1),l=i>o?i-1:o;a.val(l),l!==i&&a.trigger("change")}),a.on("click",".quantity .qty-plus",function(t){t.preventDefault();let a=e(this).siblings(".qty"),i=parseInt(a.val()),o=parseInt(a.attr("max")||0),l=i>0?i+1:1;o>0&&l>o&&(l=o),a.val(l),l!==i&&a.trigger("change")}),a.on("click",".wc-view-item a",function(){var t=e(this),a=t.data("col"),i=t.closest(".woocommerce");if(!t.hasClass("active")){e(".wc-view-item a").removeClass("active"),t.addClass("active"),t.closest(".wc-view-item").find(">button>span").html(t.text());var o=i.find("[data-widget_current_query] ul.ul_products");if(o.each(function(){e(this).removeClass("products-list").addClass("products-grid")}),o.find(">li").each(function(){var t=e(this).attr("class").replace(/(\scol-desk-\d)/g," col-desk-"+a).replace(/(\scol-lap-\d)/g," col-lap-"+a);e(this).attr("class",t)}),i.closest(".elementor-widget-wc-archive-products").length){var l=i.attr("class").replace(/(\scolumns-\d)/g," columns-"+a);i.attr("class",l)}Cookies.set("glowme_wc_product_per_row",a,{expires:2})}}).on("click",".wc-view-toggle button",function(){var t=e(this),a=t.data("view_mode"),i=t.closest(".woocommerce");if(!t.hasClass("active")){e(".wc-view-toggle button").removeClass("active"),t.addClass("active");var o=i.find("ul.products[data-grid_layout]"),l=o.attr("data-grid_layout");"grid"==a?o.removeClass("products-list").addClass("products-grid").addClass(l):o.removeClass("products-grid").addClass("products-list").removeClass(l),Cookies.set("glowme_wc_catalog_view_mode",a,{expires:2})}}),a.on("adding_to_cart",function(t,a,i){e("body").addClass("lakit-adding-cart"),e(".lakit-cart").addClass("lakit-cart-open"),e(".lakit-cart__icon").addClass("la-loading-spin")}),a.on("added_to_cart",function(t,a,i,o){e("body").removeClass("lakit-adding-cart"),e(".lakit-cart__icon").removeClass("la-loading-spin")}),la_theme_config.single_ajax_add_cart&&(a.on("submit","div.product.type-product:not(.product-type-external) form.cart, .product_item:not(.product-type-external) form.cart, .elementor-add-to-cart:not(.product-type-external) form.cart",function(t){t.preventDefault(),a.trigger("adding_to_cart");var i=e(this),o=i.attr("action")||window.location.href,l=LaStudio.global.addQueryArg(o,"product_quickview","1");void 0!==e.fn.block&&i.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),e.post(l,i.serialize()+"&_wp_http_referer="+o,function(t){let o=e(t).find(".woocommerce-notices-wrapper");o.length&&e(".woocommerce-message, .woocommerce-error",o.first()).length&&e(".single-product-article > .woocommerce-notices-wrapper").replaceWith(o.first()),void 0!==e.fn.unblock&&i.unblock(),a.trigger("LaStudio:Component:Popup:Close"),e.ajax({url:woocommerce_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(t){t&&t.fragments&&(e.each(t.fragments,function(t,a){e(t).replaceWith(a)}),e(document.body).trigger("wc_fragments_refreshed"),e("body").removeClass("lakit-adding-cart"),e(".lakit-cart__icon").removeClass("la-loading-spin"))}})})}),a.on("click",".product_item .la-addcart.product_type_variable",function(t){var a=e(this).closest(".product_item").find("form.cart");if(a.length&&0==a.find(".wc-variation-selection-needed").length)return t.preventDefault(),a.find(".single_add_to_cart_button").trigger("click"),!1})),"#register"==location.hash&&e("#customer_login .u-column2.col-2").length?e("#customer_login .u-column2.col-2").addClass("active"):e("#customer_login .u-column1.col-1").addClass("active"),a.on("click","#customer_login h2",function(t){t.preventDefault();var a=e(this).parent();a.hasClass("active")||a.addClass("active").siblings("div").removeClass("active")}),a.on("click",".wcr_resigter_link a",function(t){t.preventDefault(),e("#customer_login .u-column2.col-2 h2").trigger("click")}),(i=(t=e(".single-product-article")).find(".wc-tabs-wrapper").first()).length&&(e(".wc-tab-title a",i).off("click"),e(".wc-tabs a",i).off("click"),i.wrapInner('<div class="lakit-wc-tabs--content"></div>'),i.find(".wc-tabs").wrapAll('<div class="lakit-wc-tabs--controls"></div>'),i.find(".lakit-wc-tabs--controls").prependTo(i),i.find(".wc-tab").wrapInner('<div class="tab-content"></div>'),i.find(".wc-tab").each(function(){var t=e("#"+e(this).attr("aria-labelledby")).html();e(this).prepend('<div class="wc-tab-title">'+t+"</div>")}),e(".wc-tab-title a",i).wrapInner("<span></span>"),e(".wc-tab-title a",i).on("click",function(t){t.preventDefault(),i.find(".wc-tabs").find('li[aria-controls="'+e(this).attr("href").replace("#","")+'"]').toggleClass("active").siblings().removeClass("active"),e(this).closest(".wc-tab").toggleClass("active").siblings().removeClass("active")}),e(".wc-tabs li a",i).on("click",function(t){e(this).closest(".wc-tabs-wrapper, .woocommerce-tabs").find(e(this).attr("href")).addClass("active").siblings().removeClass("active")}),e(".wc-tabs li",i).removeClass("active"),e(".wc-tab-title a",i).first().trigger("click")),e(".cart_totals .shop_table_responsive").removeClass("shop_table_responsive"),e(document.body).on("updated_wc_div updated_shipping_method",function(){e(".cart_totals .shop_table_responsive").removeClass("shop_table_responsive")}),e(document).on("submit",".lakit-popup--content form.form-order-notes",function(t){t.preventDefault();var a=e(".button",e(this)),i=e(this).closest(".lakit-popup-template");s("save_order_node",{beforeSendCallback:function(){0==e(".woocommerce-notices-wrapper",i).length&&i.find(".lakit-popup--title").after('<div class="woocommerce-notices-wrapper"></div>'),a.addClass("loading")},completeCallback:function(){a.removeClass("loading")},successCallback:function(t,a,i){let o=t.data.responses.save_order_node;o.data&&o.data.fragments&&e.each(o.data.fragments,function(t,a){e(t).replaceWith(a)})}}).sendData({order_notes:e('[name="order_comments"]',e(this)).val()})}),e(document).on("submit",".lakit-popup--content form.form-coupon",function(t){t.preventDefault();var a=e(".button",e(this)),i=e(this).closest(".lakit-popup-template");s("apply_coupon",{beforeSendCallback:function(){0==e(".woocommerce-notices-wrapper",i).length&&i.find(".lakit-popup--title").after('<div class="woocommerce-notices-wrapper"></div>'),a.addClass("loading")},completeCallback:function(){a.removeClass("loading")},successCallback:function(t,a,i){let o=t.data.responses.apply_coupon;o.data&&o.data.fragments&&e.each(o.data.fragments,function(t,a){e(t).replaceWith(a)})}}).sendData({coupon_code:e('[name="coupon_code"]',e(this)).val()})}),e(document).on("submit",".lakit-popup--content form.woocommerce-shipping-calculator",function(t){t.preventDefault();var a=e(this),i=a.closest(".lakit-popup-template"),o=e(".form-submit .button",i),l=s("glowme_calculate_shipping",{beforeSendCallback:function(){0==e(".woocommerce-notices-wrapper",i).length&&i.find(".lakit-popup--title").after('<div class="woocommerce-notices-wrapper"></div>'),o.addClass("loading")},completeCallback:function(){o.removeClass("loading")},successCallback:function(t,a,i){t.data&&t.data.fragments&&e.each(t.data.fragments,function(t,a){e(t).replaceWith(a)})}});l.data=a.serialize()+"&action=glowme_calculate_shipping",l.send()}),e(document).on("click","#popup-cart-shipping-calculator .form-submit .button",function(t){t.preventDefault(),e(this).closest(".lakit-popup-template").find(".woocommerce-shipping-calculator").trigger("submit")}),e(document).on("change",".cart-totals-table select.shipping_method, .cart-totals-table :input[name^=shipping_method]",function(t){var a={};e(this).closest(".woocommerce-shipping-methods").find("select.shipping_method, :input[name^=shipping_method][type=radio]:checked, :input[name^=shipping_method][type=hidden]").each(function(){a[e(this).data("index")]=e(this).val()});var i=s("glowme_update_shipping",{successCallback:function(t,a,i){t.data&&t.data.fragments&&e.each(t.data.fragments,function(t,a){e(t).replaceWith(a)})},completeCallback:function(){}});i.data={security:la_theme_config.ajaxGlobal.nonce,shipping_method:a,action:"glowme_update_shipping"},i.send()}),e(document.body).on("updated_shipping_method updated_checkout",function(){e(document.body).trigger("wc_fragment_refresh")}),e(document).on("click","div.checkout_coupon button.button",function(t){t.preventDefault();var a=e(this).closest(".checkout_coupon");if(a.is(".processing"))return!1;a.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}});var i={security:wc_checkout_params.apply_coupon_nonce,coupon_code:a.find('input[name="coupon_code"]').val()};return e.ajax({type:"POST",url:wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%","apply_coupon"),data:i,success:function(t){e(".woocommerce-error, .woocommerce-message").remove(),a.removeClass("processing").unblock(),t&&(a.before(t),e(document.body).trigger("applied_coupon_in_checkout",[i.coupon_code]),e(document.body).trigger("update_checkout",{update_shipping_method:!1}))},dataType:"html"}),!1}),e(document.body).on("updated_wc_div updated_cart_totals",function(t){e('.shipping_method[checked="checked"]').prop("checked",!0)});let l=t=>{let a=t.currentTarget,i=e(a).closest(".woocommerce-cart-form");if(0===i.length&&(i=e(a).closest(".widget_shopping_cart_content")),i.is(".processing"))return!1;i.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),s("update_cart_item",{beforeSendCallback:function(){e("div.cart_totals").length&&e("div.cart_totals").addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),e("div.cart-totals-table").length&&e("div.cart-totals-table").addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},completeCallback:function(){i.removeClass("processing").unblock(),e("div.cart_totals").length&&e("div.cart_totals").removeClass("processing").unblock(),e("div.cart-totals-table").length&&e("div.cart-totals-table").removeClass("processing").unblock()},successCallback:function(t,a,i){try{e.each(t.data.responses.update_cart_item.data.fragments,function(t,a){e(t).replaceWith(a),".lakitwc-cart-wrapper"===t&&e(document.body).trigger("updated_wc_div")})}catch(o){}}}).sendData({key:a.getAttribute("data-cart_item_key"),quantity:a.value,is_cart:e("form.woocommerce-cart-form").length})},r=LaStudio.utils.debounce(l,400);e(document).on("change",".woocommerce-cart-form .quantity input.qty, .woocommerce-mini-cart .quantity input.qty",r)},r.prototype.QuickView=function(){a.on("click",".la-quickview-button,.la-core-quickview",function(i){if(t.width()>900){i.preventDefault();var o=e(this),r=function(){void 0!==e.featherlight.close()&&e.featherlight.close(),e.featherlight(o.data("href"),{openSpeed:0,closeSpeed:0,type:{wc_quickview:!0},background:'<div class="featherlight featherlight-loading is--qvpp"><div class="featherlight-outer"><button class="featherlight-close-icon featherlight-close" aria-label="Close"><i class="lastudioicon-e-remove"></i></button><div class="featherlight-content"><div class="featherlight-inner"><div class="la-loader spinner3"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><div class="cube1"></div><div class="cube2"></div><div class="cube3"></div><div class="cube4"></div></div></div></div></div><div class="custom-featherlight-overlay"></div></div>',contentFilters:["wc_quickview"],ajaxSetup:{cache:!0,ajax_request_id:LaStudio.global.getUrlParameter("product_quickview",o.data("href"))},beforeOpen:function(e){l.addClass("open-quickview-product")},afterOpen:function(t){let i=e(".woocommerce-product-gallery",this.$content);i.length&&e.fn.wc_product_gallery&&(l.addClass("lightcase--pending"),i.wc_product_gallery({flexslider:{animation:"slide",animationLoop:!1,animationSpeed:500,controlNav:"",directionNav:!0,rtl:!1,slideshow:!1,smoothHeight:!1},photoswipe_enabled:0,zoom_enabled:0})),a.trigger("reinit_la_swatches")},afterClose:function(e){l.removeClass("open-quickview-product lightcase--completed lightcase--pending")}})};e.isFunction(e.fn.featherlight)?r():LaStudio.global.loadDependencies([LaStudio.global.loadJsFile("featherlight")],r)}}),la_theme_config.single_ajax_add_cart&&a.on("click",".la-addcart.product_type_variable",function(t){t.preventDefault();var i=e(this),o=i.closest(".product_item").find("form.cart");if(o.length&&0===o.find(".wc-variation-selection-needed").length)return t.preventDefault(),o.find(".single_add_to_cart_button").trigger("click"),!1;let r=function(){void 0!==e.featherlight.close()&&e.featherlight.close();let t=i.attr("href");t=LaStudio.global.addQueryArg(t,"product_quickview",i.data("product_id")),t=LaStudio.global.addQueryArg(t,"quickcart",i.data("product_id")),e.featherlight(t,{openSpeed:0,closeSpeed:0,type:{wc_quickview:!0},background:'<div class="featherlight featherlight-loading is--qvpp"><div class="featherlight-outer"><button class="featherlight-close-icon featherlight-close" aria-label="Close"><i class="lastudioicon-e-remove"></i></button><div class="featherlight-content"><div class="featherlight-inner"><div class="la-loader spinner3"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><div class="cube1"></div><div class="cube2"></div><div class="cube3"></div><div class="cube4"></div></div></div></div></div><div class="custom-featherlight-overlay"></div></div>',contentFilters:["wc_quickview"],ajaxSetup:{cache:!0,ajax_request_id:"quickcart_"+i.data("product_id")},beforeOpen:function(e){l.addClass("open-quickview-product open-quickcart")},afterOpen:function(t){let i=e(".woocommerce-product-gallery",this.$content);i.length&&e.fn.wc_product_gallery&&(l.addClass("lightcase--pending"),i.wc_product_gallery({flexslider:{animation:"slide",animationLoop:!1,animationSpeed:500,controlNav:"",directionNav:!0,rtl:!1,slideshow:!1,smoothHeight:!1},photoswipe_enabled:0,zoom_enabled:0})),a.trigger("reinit_la_swatches")},afterClose:function(e){l.removeClass("open-quickview-product open-quickcart lightcase--completed lightcase--pending")}})};e.isFunction(e.fn.featherlight)?r():LaStudio.global.loadDependencies([LaStudio.global.loadJsFile("featherlight")],r)})},r.prototype.Wishlist=function(){function t(){var t=e("table.wishlist_table");t.addClass("shop_table_responsive"),t.find("thead th").each(function(){var a=e(this),i=a.text().trim();""!==i&&e("td."+a.attr("class"),t).attr("data-title",i)})}t(),l.on("removed_from_wishlist",function(e){t()}),a.on("added_to_cart",function(e,a,i,o){setTimeout(t,800)}),a.on("click",".product a.add_wishlist.la-yith-wishlist",function(t){if(!e(this).hasClass("added")){t.preventDefault();var a=e(this),i={add_to_wishlist:a.data("product_id"),product_type:a.data("product-type"),action:yith_wcwl_l10n.actions.add_to_wishlist_action};try{if(yith_wcwl_l10n.multi_wishlist&&yith_wcwl_l10n.is_user_logged_in){var o=a.parents(".yith-wcwl-popup-footer").prev(".yith-wcwl-popup-content"),r=o.find(".wishlist-select"),s=o.find(".wishlist-name"),c=o.find(".wishlist-visibility");i.wishlist_id=r.val(),i.wishlist_name=s.val(),i.wishlist_visibility=c.val()}if(!LaStudio.global.isCookieEnable()){alert(yith_wcwl_l10n.labels.cookie_disabled);return}e.ajax({type:"POST",url:yith_wcwl_l10n.ajax_url,data:i,dataType:"json",beforeSend:function(){a.addClass("loading")},complete:function(){a.removeClass("loading").addClass("added")},success:function(t){if(yith_wcwl_l10n.multi_wishlist&&yith_wcwl_l10n.is_user_logged_in){var i=e("select.wishlist-select");void 0!==e.prettyPhoto&&e.prettyPhoto.close(),i.each(function(a){var i=e(this),o=i.find("option");if((o=o.slice(1,o.length-1)).remove(),void 0!==t.user_wishlists){var l=0;for(l in t.user_wishlists)"1"!=t.user_wishlists[l].is_default&&e("<option>").val(t.user_wishlists[l].ID).html(t.user_wishlists[l].wishlist_name).insertBefore(i.find("option:last-child"))}})}void 0!==LaStudioKits.noticeCreate&&LaStudioKits.noticeCreate("success",t.message,!0),a.attr("href",t.wishlist_url),e('.add_wishlist[data-product_id="'+a.data("product_id")+'"]').addClass("added"),l.trigger("added_to_wishlist")}})}catch(n){LaStudio.global.log(n)}}}),a.on("click",".product a.add_wishlist.la-ti-wishlist",function(t){var a;t.preventDefault(),(a=e(this).closest(".entry-summary").length?e(this).closest(".entry-summary").find("form.cart .tinvwl_add_to_wishlist_button"):e(this).closest(".elementor-widget").length?e(this).closest(".elementor-widget").find("form.cart .tinvwl_add_to_wishlist_button"):e(this).closest(".product").find(".tinvwl_add_to_wishlist_button")).trigger("click")}),a.on("click",'.product a.add_wishlist.la-core-wishlist, a.la_remove_from_wishlist, .view-wishlist-list, .lakit-wishlist-trigger, a[data-action="lakit_wishlist"]',function(t){t.preventDefault();let a=e(this),i=a.hasClass("added")?"load":"add";a.is(".la_remove_from_wishlist")&&(i="remove"),(a.is(".view-wishlist-list")||a.is(".lakit-wishlist-trigger")||a.is('a[data-action="lakit_wishlist"]'))&&(i="load");let o=e=>{LaStudio.global.ShowMessageBox(LaStudio.utils.localCache.get("la_wishlist").table.replace("lakit-wishlist-wrapper","lakit-wishlist-wrapper wli--popup"),"open-wishlist-pp",!1,e)};if("load"===i&&LaStudio.utils.localCache.exist("la_wishlist",!0))e("body").hasClass("open-wishlist-pp")?e(".la-global-message").html(LaStudio.utils.localCache.get("la_wishlist").table.replace("lakit-wishlist-wrapper","lakit-wishlist-wrapper wli--popup")):o();else{let l=null,r=s("wishlist",{beforeSendCallback:function(){a.addClass("loading")},completeCallback:function(){a.removeClass("loading")},successCallback:function(t,r,s){let c=t.data.responses.wishlist.data;if(e(".la-wishlist-count").html(c.count),clearTimeout(l),"add"===i){let n=la_theme_config.i18n.wishlist.view,d=e('.add_wishlist[data-product_id="'+a.data("product_id")+'"]');d.addClass("added").attr("href",c.wishlist_url).attr("data-hint",n),e(".lakit-btn--text,.elementor-button-text",d).each(function(){""!==e(this).text()&&e(this).html(n)})}else"remove"===i&&e('.add_wishlist[data-product_id="'+a.data("product_id")+'"]').removeClass("added");LaStudio.utils.localCache.set("la_wishlist",{count:c.count,table:c.table_output});let u=function(){"load"!==i&&(e(".la_wishlist-bottom_notice").html(c.message).addClass("show-notice"),l=setTimeout(function(){e(".la_wishlist-bottom_notice").removeClass("show-notice")},3e3))};e(".la-global-message").length>0?(e(".la-global-message").html(c.table_output.replace("lakit-wishlist-wrapper","lakit-wishlist-wrapper wli--popup")),u()):e(".la_wishlist_table").length?e(".la_wishlist_table").replaceWith(e(c.table_output).find(".la_wishlist_table")):o(u)}});r.sendData({post_id:a.data("product_id"),type:i})}}),e("form.variations_form").on("woocommerce_variation_has_changed",function(t){var a=e(this),i=parseInt(a.find('input[name="variation_id"]').val()||0);0==i&&(i=parseInt(a.find('input[name="product_id"]').val())),a.closest(".product").find(".cart .la-core-wishlist").attr("data-product_id",i).removeClass("added")})},r.prototype.Compare=function(){a.on("click","table.compare-list .remove a",function(t){t.preventDefault(),e('.add_compare[data-product_id="'+e(this).data("product_id")+'"]',window.parent.document).removeClass("added")}).on("click",".la_com_action--compare",function(e){"undefined"!=typeof yith_woocompare&&(e.preventDefault(),a.trigger("LaStudio:Component:Popup:Close"),l.trigger("yith_woocompare_open_popup",{response:LaStudio.global.addQueryArg(LaStudio.global.addQueryArg("","action",yith_woocompare.actionview),"iframe","true")}))}).on("click",".product a.add_compare:not(.la-core-compare)",function(t){if(t.preventDefault(),e(this).hasClass("added")){l.trigger("yith_woocompare_open_popup",{response:LaStudio.global.addQueryArg(LaStudio.global.addQueryArg("","action",yith_woocompare.actionview),"iframe","true")});return}var a=e(this),i=e(".yith-woocompare-widget ul.products-list"),o={action:yith_woocompare.actionadd,id:a.data("product_id"),context:"frontend"};e.ajax({type:"post",url:yith_woocompare.ajaxurl.toString().replace("%%endpoint%%",yith_woocompare.actionadd),data:o,dataType:"json",beforeSend:function(){a.addClass("loading")},complete:function(){a.removeClass("loading").addClass("added")},success:function(t){e.isFunction(e.fn.block)&&i.unblock(),void 0!==LaStudioKits.noticeCreate&&LaStudioKits.noticeCreate("success",la_theme_config.i18n.compare.success,!0),e('.add_compare[data-product_id="'+a.data("product_id")+'"]').addClass("added"),i.unblock().html(t.widget_table)}})}),a.on("click",'.product a.add_compare.la-core-compare, a.la_remove_from_compare, .view-compare-list, .lakit-compare-trigger, a[data-action="lakit_compare"]',function(t){t.preventDefault();let a=e(this),i=a.hasClass("added")?"load":"add";a.is(".la_remove_from_compare")&&(i="remove"),(a.is(".view-compare-list")||a.is(".lakit-compare-trigger")||a.is('a[data-action="lakit_compare"]'))&&(i="load");let o=e=>{let t=LaStudio.utils.localCache.get("la_compare");LaStudio.global.ShowMessageBox(t.table,"open-compare-pp",!1,e)};if("load"===i&&LaStudio.utils.localCache.exist("la_compare",!0))e("body").hasClass("open-compare-pp")?e(".la-global-message").html(LaStudio.utils.localCache.get("la_compare").table):o();else{let l=s("compare",{beforeSendCallback:function(){a.addClass("loading")},completeCallback:function(){a.removeClass("loading")},successCallback:function(t,a,i){let l=t.data.responses.compare.data;e(".la-compare-count").html(l.count),clearTimeout(null),LaStudio.utils.localCache.set("la_compare",{count:l.count,table:l.table_output}),e(".la-global-message").length?e(".la-global-message").html(l.table_output):e(".la-compare-table").length?e(".la-compare-table").replaceWith(e(l.table_output).find(".la-compare-table")):o()}});l.sendData({post_id:a.data("product_id"),type:i})}})},r.prototype.AjaxFilter=function(){if(0!==e(".woocommerce.lakit_wc_widget_current_query").length){s(),e("li.current-cat, li.current-cat-parent",e(".widget-area")).each(function(){e(this).addClass("open"),e(">ul",e(this)).css("display","block")});var l=[".woocommerce.lakit_wc_widget_current_query .wc-toolbar-top",".woocommerce.lakit_wc_widget_current_query .la-advanced-product-filters .sidebar-inner",".woocommerce.lakit_wc_widget_current_query .wc_page_description",".woocommerce.lakit_wc_widget_current_query ul.ul_products",".woocommerce.lakit_wc_widget_current_query .woocommerce-pagination",".woocommerce.lakit_wc_widget_current_query .lakit-pagination",".elementor-lakit-woofilters .woocommerce-result-count",];try{history.pushState({title:document.title,href:LaStudio.global.removeURLParameter(window.location.href,"la_doing_ajax")},document.title,LaStudio.global.removeURLParameter(window.location.href,"la_doing_ajax")),LaStudio.utils.localCache.set(LaStudio.global.removeURLParameter(window.location.href,"la_doing_ajax"),document.documentElement.outerHTML)}catch(r){LaStudio.global.log(r)}window.addEventListener("popstate",function(e){if(e?.state?.href){let a=e?.state?.href;a=LaStudio.global.removeURLParameter(a,"la_doing_ajax"),LaStudio.utils.localCache.exist(a,!0)&&c(LaStudio.utils.localCache.get(a),a,t)}}),LaStudio.global.eventManager.subscribe("LaStudio:AjaxShopFilter",function(t,a,i){if(e(".wc-toolbar-container").length>0){var l=e(".wc-toolbar-container").offset().top-200;o.stop().animate({scrollTop:l},800)}"?"===a.slice(-1)&&(a=a.slice(0,-1)),a=a.replace(/%2C/g,","),a=LaStudio.global.removeURLParameter(a,"la_doing_ajax");try{history.pushState({title:document.title,href:a},document.title,a)}catch(r){LaStudio.global.log(r)}LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter:before_send",[a,i]),LaStudio.utils.ajax_xhr&&LaStudio.utils.ajax_xhr.abort();var s=a;a=LaStudio.global.addQueryArg(a,"la_doing_ajax","true"),LaStudio.utils.ajax_xhr=e.get(a,function(e){c(e,s,i)},"html")}),LaStudio.global.eventManager.subscribe("LaStudio:AjaxShopFilter:success",function(t,o,l,r){e(".widget.woocommerce.widget_price_filter, .lakit-wfi-source_price_range").length&&function t(){if("undefined"==typeof woocommerce_price_slider_params)return!1;e("input#min_price, input#max_price").hide(),e(".price_slider, .price_label").show();var a=e(".price_slider_amount #min_price").data("min"),i=e(".price_slider_amount #max_price").data("max"),o=e(".price_slider_amount #min_price").val(),l=e(".price_slider_amount #max_price").val();e(".price_slider:not(.ui-slider)").slider({range:!0,animate:!0,min:a,max:i,values:[o,l],create:function(){e(".price_slider_amount #min_price").val(o),e(".price_slider_amount #max_price").val(l),e(document.body).trigger("price_slider_create",[o,l])},slide:function(t,a){e("input#min_price").val(a.values[0]),e("input#max_price").val(a.values[1]),e(document.body).trigger("price_slider_slide",[a.values[0],a.values[1]])},change:function(t,a){e(document.body).trigger("price_slider_change",[a.values[0],a.values[1]])}})}(),i.hasClass("open-advanced-shop-filter")&&(i.removeClass("open-advanced-shop-filter"),e(".la-advanced-product-filters").stop().slideUp("fast"));var s=LaStudio.global.getUrlParameter("pwb-brand-filter",location.href);null!==s&&""!==s&&(e('.pwb-filter-products input[type="checkbox"]').prop("checked",!1),s.split(",").filter(function(t){e('.pwb-filter-products input[type="checkbox"][value="'+t+'"]').prop("checked",!0)})),e("body").trigger("lastudio-fix-ios-limit-image-resource").trigger("lastudio-lazy-images-load").trigger("jetpack-lazy-images-load").trigger("lastudio-object-fit");try{LaStudioKits.initMasonry(e(".elementor-lakit-wooproducts"))}catch(c){}e(".product_item--countdown").trigger("lastudio-kit/products/init-countdown"),e(".lakit-embla_wrap").trigger("lastudio-kit/init-product-item-gallery"),e(".col-row").trigger("lastudio-kit/LazyloadSequenceEffects"),LaStudio.core.initAll(a)}),a.on("click",".btn-advanced-shop-filter",function(t){t.preventDefault(),i.toggleClass("open-advanced-shop-filter"),e(".la-advanced-product-filters").stop().animate({height:"toggle"})}).on("click",".la-advanced-product-filters .close-advanced-product-filters",function(t){t.preventDefault(),e(".btn-advanced-shop-filter").trigger("click")}).on("click",".woocommerce.lakit_wc_widget_current_query .woocommerce-pagination:not(.lakit-ajax-pagination) a, .la-advanced-product-filters-result a",function(t){t.preventDefault(),e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[e(this).attr("href"),e(this)])}).on("click",".woo-widget-filter a, .wc-ordering a, .wc-view-count a, .woocommerce.product-sort-by a, .woocommerce.la-price-filter-list a, .woocommerce.widget_layered_nav a, .woocommerce.widget_product_tag_cloud li a, .woocommerce.widget_product_categories a, .wc-block-product-categories-list-item > a",function(t){t.preventDefault(),e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),e(this).closest(".widget_layered_nav").length?e(this).parent().hasClass("active")||e(this).parent().hasClass("chosen")?e(this).parent().removeClass("active chosen"):e(this).parent().addClass("active chosen"):e(this).parent().addClass("active").siblings().removeClass("active"),e(".lasf-custom-dropdown").removeClass("is-hover");var a=e(this).attr("href"),i=LaStudio.global.getUrlParameter("theme_template_id");!LaStudio.global.getUrlParameter("theme_template_id",a)&&i&&(a=LaStudio.global.addQueryArg(a,"theme_template_id",i)),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[a,e(this)])}).on("click",".woocommerce.widget_product_tag_cloud:not(.la_product_tag_cloud) a",function(t){t.preventDefault(),e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),e(this).addClass("active").siblings().removeClass("active");var a=e(this).attr("href"),i=LaStudio.global.getUrlParameter("theme_template_id");!LaStudio.global.getUrlParameter("theme_template_id",a)&&i&&(a=LaStudio.global.addQueryArg(a,"theme_template_id",i)),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[a,e(this)])}).on("click",".woocommerce.widget_layered_nav_filters a",function(t){t.preventDefault(),e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[e(this).attr("href"),e(this)])}).on("submit",".widget_price_filter form, .woocommerce-widget-layered-nav form, .lakit-woofilters_block_item form",function(t){t.preventDefault();var a=e(this),i=a.attr("action")+"?"+a.serialize();e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[i,a])}).on("change",".woocommerce-widget-layered-nav form select",function(t){t.preventDefault();var a=e(this).val(),i=e(this).attr("class").split("dropdown_layered_nav_")[1];e(':input[name="filter_'+i+'"]').val(a),e(this).attr("multiple")||e(this).closest("form").submit()}).on("change",".widget_pwb_dropdown_widget .pwb-dropdown-widget",function(t){t.preventDefault();var a=e(this),i=e(this).val();e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[i,a])}).on("click",".widget_pwb_filter_by_brand_widget .pwb-filter-products button",function(t){t.preventDefault();var a=e(this).closest(".pwb-filter-products"),i=a.data("cat-url"),o=[];a.find('input[type="checkbox"]:checked').each(function(){o.push(e(this).val())}),o.length>0&&(i=LaStudio.global.addQueryArg(i,"pwb-brand-filter",o.join(","))),e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[i,a])}).on("change",".widget_pwb_filter_by_brand_widget .pwb-filter-products.pwb-hide-submit-btn input",function(t){t.preventDefault();var a=e(this).closest(".pwb-filter-products"),i=a.data("cat-url"),o=[];a.find('input[type="checkbox"]:checked').each(function(){o.push(e(this).val())}),o.length>0&&(i=LaStudio.global.addQueryArg(i,"pwb-brand-filter",o.join(","))),e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[i,a])}).on("click",".elementor-lakit-woofilters .lakit-woofilters-ul a",function(t){t.preventDefault(),e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading");var a=e(this).closest("li"),i=e(this).closest(".lakit-woofilters-ul").data("filter"),o=e(this).attr("href"),l=LaStudio.global.getUrlParameter("theme_template_id"),r=LaStudio.global.getUrlParameter("theme_template_id",o);if(!r&&l&&(o=LaStudio.global.addQueryArg(o,"theme_template_id",l)),a.hasClass("active")&&("product_cat_kitfilter"===i||"product_tag_kitfilter"===i)){var s=la_theme_config.shop_url,c=e(this);a.closest("ul.children").length>0&&(s=(c=a.closest("ul.children").siblings("a")).attr("href")),(r=LaStudio.global.getUrlParameter("theme_template_id",s))||!l||(s=LaStudio.global.addQueryArg(s,"theme_template_id",l)),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[s,c]);return}a.addClass("active"),0===e(this).closest(".lakit-wfi-source_product_attribute").length&&a.siblings("li").removeClass("active"),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[o,e(this)])}).on("click",".lakit-category-filters a",function(t){t.preventDefault();var a=e(this).closest(".lakit-category-filters").data("filterSelector");if(a){var i=e(this).closest(a);if(i.hasClass("active chosen"))return;i.siblings(a).removeClass("active chosen"),i.addClass("active chosen")}e("body").addClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").addClass("loading"),e(".lasf-custom-dropdown").removeClass("is-hover");var o=e(this).attr("href"),l=LaStudio.global.getUrlParameter("theme_template_id");!LaStudio.global.getUrlParameter("theme_template_id",o)&&l&&(o=LaStudio.global.addQueryArg(o,"theme_template_id",l)),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter",[o,e(this)])}).on("lastudio-kit/ajax-pagination/success",function(e,t){if(t?.parentContainer?.is('.lakit-products[data-widget_current_query="yes"]')){let a=LaStudio.global.removeURLParameter(t.currentURL,"la_doing_ajax");a=LaStudio.global.removeURLParameter(a,"_"),history.pushState({title:document.title,href:a},document.title,a),LaStudio.utils.localCache.set(a,document.documentElement.outerHTML)}}).on("lastudio-kit/ajax-loadmore/success",function(t,a){if(a?.currentURL!==void 0&&a?.parentContainer?.is('.lakit-products[data-widget_current_query="yes"]')){a?.pagination?.find(".lakit-ajax-result-count")?.length&&e(".lakit-woofilters_block_item__filter .woocommerce-result-count").html(a?.pagination?.find(".lakit-ajax-result-count")?.html());let i=LaStudio.global.removeURLParameter(a.currentURL,"la_doing_ajax");i=LaStudio.global.removeURLParameter(i,"_"),history.pushState({title:document.title,href:i},document.title,i),LaStudio.utils.localCache.set(i,document.documentElement.outerHTML)}}),e(".widget_pwb_dropdown_widget .pwb-dropdown-widget").off("change"),e(".widget_pwb_filter_by_brand_widget .pwb-filter-products button").off("click"),e(".widget_pwb_filter_by_brand_widget .pwb-filter-products.pwb-hide-submit-btn input").off("change")}function s(){e(".woocommerce.lakit_wc_widget_current_query .lakit-products").length?0===e(".woocommerce.lakit_wc_widget_current_query .lakit-products .la-ajax-shop-loading").length&&e('<div class="la-ajax-shop-loading"><span class="lakit-css-loader"></span></div>').prependTo(e(".woocommerce.lakit_wc_widget_current_query .lakit-products")):0==e(".woocommerce.lakit_wc_widget_current_query .la-ajax-shop-loading").length&&e('<div class="la-ajax-shop-loading"><span class="lakit-css-loader"></span></div>').prependTo(e(".woocommerce.lakit_wc_widget_current_query"))}function c(t,a,i){var o=t.match("<title>(.*)</title>");o&&o[1]&&(document.title=o[1].replaceAll("&#8211;","–")),LaStudio.utils.localCache.set(a,t);for(let r=0;r<l.length;r++)e(l[r]).length&&(e(t).find(l[r]).length?e(l[r]).replaceWith(e(t).find(l[r])):e(l[r]).addClass("nothing-to-show"));try{let c=e.parseHTML(t).filter(e=>"elementor-frontend-inline-css"===e.id)[0];c&&e("#elementor-frontend-inline-css").replaceWith(e(c))}catch(n){}(e(".woocommerce.lakit_wc_widget_current_query > .woocommerce-no-products-found").length||e(t).find(".woocommerce.lakit_wc_widget_current_query > .woocommerce-no-products-found").length)&&(e(".woocommerce.lakit_wc_widget_current_query").replaceWith(e(t).find(".woocommerce.lakit_wc_widget_current_query")),s()),e(".widget-area").each(function(){var a=e(this).data("id");e(t).find('.widget-area[data-id="'+a+'"]').length&&(e(this).replaceWith(e(t).find('.widget-area[data-id="'+a+'"]')),LaStudio.core.Blog(e('.widget-area[data-id="'+a+'"]')))});let d=[];e(".widget.lakit-wp--widget").each(function(){var t=e(this).closest(".elementor-column, .e-container").data("id");0>d.indexOf(t)&&d.push(t)});let u=[];e(".elementor-lakit-woofilters").each(function(){var t=e(this).data("id");0>u.indexOf(t)&&u.push(t)}),u.length&&u.forEach(function(a){e(t).find('.elementor-element[data-id="'+a+'"]').length&&(e('.elementor-element[data-id="'+a+'"]').replaceWith(e(t).find('.elementor-element[data-id="'+a+'"]')),window.elementorFrontend.hooks.doAction("frontend/element_ready/lakit-woofilters.default",e('.elementor-element[data-id="'+a+'"]'),e))}),d.length>0&&d.forEach(function(a){e(t).find('.elementor-element[data-id="'+a+'"]').length&&(e('.elementor-element[data-id="'+a+'"]').replaceWith(e(t).find('.elementor-element[data-id="'+a+'"]')),LaStudio.core.elementorFrontendInit(e('.elementor-element[data-id="'+a+'"]')),LaStudio.core.Blog(e('.elementor-element[data-id="'+a+'"]')))}),e(".lakit-breadcrumbs").length&&e(t).find(".lakit-breadcrumbs").length&&e(".lakit-breadcrumbs").replaceWith(e(t).find(".lakit-breadcrumbs")),e(".lakit-archive-title").length&&e(t).find(".lakit-archive-title").length&&e(".lakit-archive-title").replaceWith(e(t).find(".lakit-archive-title"));try{var p=Cookies.get("glowme_wc_catalog_view_mode");e('.wc-toolbar .wc-view-toggle button[data-view_mode="'+p+'"]').trigger("click");var h=Cookies.get("glowme_wc_product_per_row");e('.wc-toolbar .wc-view-item a[data-col="'+h+'"]').trigger("click")}catch(g){}e("body").trigger("lastudio-fix-ios-limit-image-resource"),e("body").removeClass("lakit-woofilter-loading"),e(".la-ajax-shop-loading").removeClass("loading"),LaStudio.global.eventManager.publish("LaStudio:AjaxShopFilter:success",[t,a,i])}},window.LaStudioWooCommerce=new r}(jQuery);