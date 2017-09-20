﻿;$(document).ready(function ()
{
    var roadInit = new RoadUI.Init();
    roadInit.calendar();
    roadInit.file();
    roadInit.member();
    roadInit.dict();
    roadInit.validate();
    roadInit.select();
    roadInit.table();
    roadInit.tab1();
    roadInit.selectIco();
    roadInit.editor();
    roadInit.text();
    roadInit.textarea();
    roadInit.button();
    roadInit.textFocus();
});

;RoadUI.Init = function ()
{
    this.validate = function ()
    {
        new RoadUI.Validate().bind($("[validate]"));
    };

    this.textFocus = function ()
    {
        var $txt = $('<input type="text" style="height:0; width:0;" />');
        try
        {
            $("body").prepend($txt);
            $txt.get(0).focus();
            $txt.remove();
        } catch (e) { }
    };

    this.text = function ()
    {
        new RoadUI.Text().init($(".mytext"));
    };

    this.textarea = function ()
    {
        new RoadUI.Textarea().init($(".mytextarea"));
    };

    this.editor = function ()
    {
        new RoadUI.Editor().init($(".myeditor"));
    };

    this.calendar = function ()
    {
        new RoadUI.Calendar().init($(".mycalendar"));
    };

    this.select = function ()
    {
        new RoadUI.Select().init($(".myselect"));
    };

    this.button = function ()
    {
        new RoadUI.Button().init($(".mybutton"));
    };

    this.file = function ()
    {
        new RoadUI.File().init($(".myfile"));
    };

    this.member = function ()
    {
        new RoadUI.Member().init($(".mymember"));
    };

    this.dict = function ()
    {
        new RoadUI.Dict().init($(".mydict"));
    };

    this.selectIco = function ()
    {
        $(".myico").each(function ()
        {
            new RoadUI.SelectIco({ obj: $(this) });
        });

    };

    this.tab1 = function ()
    {
        $(".mytab").each(function ()
        {
            new RoadUI.Tab1({ obj: $(this) })
        });
    };

    this.table = function ()
    {
        $(".listtable tbody tr").addClass("listtabletrout").bind("mouseover", function ()
        {
            $(this).children("td").removeClass().addClass("listtabletrover");
        }).bind("mouseout", function ()
        {
            $(this).children("td").removeClass().addClass("listtabletrout");
        });
        $(".listtable1 tbody tr").addClass("listtable1trout").bind("mouseover", function ()
        {
            $(this).children("td").removeClass().addClass("listtable1trover");
        }).bind("mouseout", function ()
        {
            $(this).children("td").removeClass().addClass("listtable1trout");
        });
    };
}