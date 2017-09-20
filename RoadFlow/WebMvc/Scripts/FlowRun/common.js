﻿$(function ()
{
    $(window).bind('resize', function ()
    {
        $('#flowMain').width($(window).width());
        $('#flowMain').height($(window).height() - (isShow ? 0 : (isSign ? (isDebug ? 182 : 78) : (isDebug ? 130 : 26))));
    });
    $(window).resize();
});

function execute(script)
{
    if (!script || $.trim(script).length == 0)
    {
        return false;
    }
    eval(script);
}

function checkSign()
{
    if (isSign)
    {
        if ($.trim($("#comment").val()).length == 0)
        {
            alert("请填写处理意见!"); return false;
        }

        if (signType == "2")
        {
            if ("1" != $("#issign").val())
            {
                alert("请签章!"); return false;
            }
        }
    }
    return true;
}

function setSign()
{
    $("#issign").val("1");
    $("#signbutton").hide();
    $("#signbutton").prop("disabled", true);
    $("#signimg").show();
}

function flowSend()
{
    if (!checkSign())
    {
        return false;
    }
    top.mainDialog.open({ url: top.rootdir + "/WorkFlowRun/FlowSend?" + query, openerid: iframeid, width: 480, height: 280, title: "选择处理步骤和人员" });
}

function flowBack()
{
    if (!checkSign())
    {
        return false;
    }
    top.mainDialog.open({ url: top.rootdir + "/WorkFlowRun/FlowBack?" + query, openerid: iframeid, width: 480, height: 280, title: "选择退回步骤" });
}

function showComment()
{
    top.mainDialog.open({ url: top.rootdir + "/WorkFlowRun/ShowComment?" + query, openerid: iframeid, width: 800, height: 420, title: "查看流程处理意见" });
}

function flowSave()
{
    var options = {};
    options.type = "save";
    options.steps = [];
    formSubmit(options);
}

function flowCompleted()
{
    var options = {};
    options.type = "completed";
    options.steps = [];
    formSubmit(options);
}

function flowRedirect()
{
    top.mainDialog.open({ url: top.rootdir + "/WorkFlowRun/FlowRedirect?" + query, openerid: iframeid, width: 480, height: 200, title: "选择接收人员" });
}

function formSubmit(options)
{
    if (!options || !options.type || !options.steps)
    {
        alert("参数不足!");
        return false;
    }
    if (options.type.toLowerCase() != "save" && options.type.toLowerCase() != "completed" && options.steps.length == 0)
    {
        alert("没有要处理的步骤!");
        return false;
    }
    var f = document.forms[0];
    //验证提示类型 0-弹出 1-图标加提示信息 2-图标
    var validateAlertType = $("#Form_ValidateAlertType").size() > 0 && !isNaN($("#Form_ValidateAlertType").val()) ? parseInt($("#Form_ValidateAlertType").val()) : 1;
    if (new RoadUI.Validate().validateForm(f, validateAlertType))
    {
        showProcessing(options.type);
        window.setTimeout('', 100);
        $("#params").val(JSON.stringify(options));
        f.action = top.rootdir + "/WorkFlowRun/Execute?" + query;
        f.submit();
    }
}

function showProcessing(type)
{
    var title = "正在处理";
    switch (type)
    {
        case "save": title = "正在保存..."; break;
        case "submit": title = "正在发送..."; break;
        case "back": title = "正在退回..."; break;
        case "redirect": title = "正在转交..."; break;
    }
    top.mainDialog.open({
        title: title, width: 260, height: 120, url: top.rootdir + "/WorkFlowRun/Process?op=" + type,
        openerid: iframeid, resize: false, showclose: true, showico: true
    });
}

function sign()
{
    top.mainDialog.open({ title: "请输入签章密码", width: 360, height: 130, url: top.rootdir + "/WorkFlowRun/Sign?appid=" + appid, openerid: iframeid, resize: false });
}

function showProcess()
{
    top.mainDialog.open({ id: 'showprocess', title: '查看处理过程', url:top.rootdir + '/WorkFlowTasks/Detail?' + query, width: 850, height: 450 });
}

function showFlowDesign()
{
    top.mainDialog.open({ id: 'showflowdesign', title: '查看流程图', url: top.rootdir + '/WorkFlowRun/ShowDesign?' + query, width: 850, height: 450 });
}

function formPrint()
{
    RoadUI.Core.open(top.rootdir + "/WorkFlowRun/Print?" + query, 980, 600, "打印表单");
}