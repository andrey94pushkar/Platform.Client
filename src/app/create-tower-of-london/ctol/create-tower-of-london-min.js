export var Ctol = (function () {
    return {
        initFunction: initFunction
    };

    function initFunction() {
        var superObj = {
            arrStart: "",
            arrFinish: "",
            numMoves: 0
        }
        var selected = null;
        var selectedR = null;
        var superArr = [];
        var pageArrayStart = [];
        var pageArrayEnd = [];
        var paperWidth = 300;
        var paperHeight = 370;
        var roundCount = 1;
        var update = false;
        var idItems = [];
        var currPrct = 0;
        var currTrl = 0;
        var paper = null;
        var paperR = null;
        //draw dase with 3 pegs
        var baseColor = '#7A5230';
        var pegColor = '#7A5230';
        var background = "#fff";
        var pegThick = 11;
        var r = 30;
        var round = 0;
        var what = "";

        var p =null;

        var pe1 = null;
        var pe2 = null;
        var pe3 = null;
        var pe4 = null;
        var pe5 = null;
        var pe6 = null;

        var ps1 = null;
        var ps2 = null;
        var ps3 = null;
        var ps4 = null;
        var ps5 = null;
        var ps6 = null;
        
        //prct = parseInt($('#<%=ddlPractice.ClientID %> option:selected').text());
        //trl = parseInt($('#<%=ddlNumberGames.ClientID %> option:selected').text());
		var prct = 1;
        var trl = 5;
        $('#makeAnother').hide();
        $("#success").hide();
        // $('#title').hide();

        var array = [];
        var arrayR = [];

$('#SetupUpdate').click(function () {
            $('#SetupUpdate').hide();
            $('#delete').hide();

            //var value = $('#<%=movesText.ClientID%>').val();
			var value = '';
            if (value.length == 0) {
                what = "";
                updateValues();
                $('#MovesError').hide();
                if (prct == 0 && trl == 0) {
                    var error = "!Please set up the value for number of rounds for this test."
                    $('#MovesError').show();
                    $('#MovesError').html(error);
                    $('#SetupUpdate').show();
                    return;
                }
                update = true;
                $('#save').show();
                $('#makeAnother').hide();
                //return;
                var moves = [];
                for (var i = 1; i <= prct; i++) {
                    moves[i - 1] = i;
                    idItems[i] = i;
                    $('#pageNums').append('<input type="button" value=' + i + ' id=' + i + ' class="edit prct"/>');
                }
                for (i = (prct + 1); i <= (trl + prct); i++) {

                    $('#pageNums').append('<input type="button" value=' + i + ' id=' + i + ' class="edit trl"/>');
                    moves[i - 1] = i;
                    idItems[i] = i;
                }
                round = roundCount = moves.length;
            }
            else {
                setUpdateValues(value);

            }

            $('.edit').bind("click", function () {
                $("#success").hide();
                checkForChange();
                update = true;
                round = this.value;
                test(superArr, round);
                $('#save').show();
            });

        });
   // };

    function updateValues() {
        //prct = parseInt($('#<%=ddlPractice.ClientID %> option:selected').text());
        //trl = parseInt($('#<%=ddlNumberGames.ClientID %> option:selected').text());
        prct = 2;
        trl = 5;
    }

    function data(id, value) {
        this.id = id
        this.color = value
    }

	function checkForChange(str) {
            if (idItems.length <= 0)
                return;
            updateValues();
            var compare = 0;
            if (str != null)
                what = str

            if (update == true) {
                compare = idItems.length - 1;
            }
            else compare = roundCount - 1;

            if ((prct + trl) > compare) {

                $('#makeAnother').show();

                showNumGrp();
                $('#delete').hide();

            }
            else {

                $('#makeAnother').hide();
                if ((prct + trl) < compare) $('#delete').show();
                else $('#delete').hide()
            }

        }
		function showNumGrp() {
            $('#roundNumber').show();
            $('#roundValue').show();
        }
		function test(superArr, round) {

            //var selected = null;
            //var selectedR = null;
            makeLabel(round);
            initFieldStart();
            initFieldEnd();
            superObj = superArr[round];
            what = "";
            if (superObj != null) {
                var arr = superObj.arrStart.replace(/[\'[\]']+/g, '').replace(/[\'{\}']+/g, '').split(',');
                var arrR = superObj.arrFinish.replace(/[\'[\]']+/g, '').replace(/[\'{\}']+/g, '').split(',');
                var num = superObj.numMoves;


                $('#numberOfMoves').val(num);
                for (i = 0; i < arr.length; i++) {
                    if (i % 2 == 0) {
                        id = arr[i].substr(arr[i].indexOf('p'), 8);
                        p = paper.getById(id);
                    }
                    else {
                        color = arr[i].substr(8, arr[i].lastIndexOf('"')).replace(/['"']+/g, '');
                        p.attr({ fill: color, "stroke-width": "2", stroke: 'black' });
                        array.push(new data(id, color));
                    }
                }

                for (i = 0; i < arr.length; i++) {
                    if (i % 2 == 0) {
                        id = arrR[i].substr(arrR[i].indexOf('p'), 6);
                        p = paperR.getById(id);
                    }
                    else {
                        color = arrR[i].substr(8, arr[i].lastIndexOf('"')).replace(/['"']+/g, '');
                        p.attr({ fill: color, "stroke-width": "2", stroke: 'black' });
                        arrayR.push(new data(id, color));
                    }
                }
            }
            else
                $('#numberOfMoves').val("");

               

        }

         $('#makeAnother').click(function () {
                    checkForChange();
                    //update = false;
                    //round = 0;
                    makeLabel(idItems.length);
        
                    initFieldStart();
                    initFieldEnd();
                    $('#numberOfMoves').val("");
                    $('#save').show();
                    updateValues();
        
                    if (idItems.length >= prct + trl)
                        $('#makeAnother').hide();
                    roundCount++;
                });
        
        
                $('#colorRed').click(function () {
                    if (selected != null) {
                        selected.attr({ fill: "red", "stroke-width": "2", stroke: 'black' });
                        var result = array.filter(function (obj) {
                            return obj.color == "red";
                        });
                        if (result.length != 0) {
                            array = array.filter(function (el) {
                                return el.id !== result[0].id;
                            });
                            p = paper.getById(result[0].id);
                            if (p.id != selected.id)
                                p.attr({ fill: "white", "stroke-width": "2", stroke: 'black' });
                        }
        
                        array.push(new data(selected.id, "red"));
                    }
                    if (selectedR != null) {
                        selectedR.attr({ fill: "red", "stroke-width": "2", stroke: 'black' });
                        var result = arrayR.filter(function (obj) {
                            return obj.color == "red";
                        });
                        if (result.length != 0) {
                            arrayR = arrayR.filter(function (el) {
                                return el.id !== result[0].id;
                            });
                            p = paperR.getById(result[0].id);
                            if (p.id != selectedR.id)
                                p.attr({ fill: "white", "stroke-width": "2", stroke: 'black' });
                        }
        
                        arrayR.push(new data(selectedR.id, "red"));
                    }
        
        
                });
                $('#colorBlue').click(function () {
                    if (selected != null) {
                        selected.attr({ fill: "blue", "stroke-width": "2", stroke: 'black' });
                        var result = array.filter(function (obj) {
                            return obj.color == "blue";
                        });
        
                        if (result.length != 0) {
                            array = array.filter(function (el) {
                                return el.id !== result[0].id;
                            });
                            p = paper.getById(result[0].id);
                            if (p.id != selected.id)
                                p.attr({ fill: "white", "stroke-width": "2", stroke: 'black' });
        
                        }
                        array.push(new data(selected.id, "blue"));
                    }
                    if (selectedR != null) {
                        selectedR.attr({ fill: "blue", "stroke-width": "2", stroke: 'black' });
                        var result = arrayR.filter(function (obj) {
                            return obj.color == "blue";
                        });
        
                        if (result.length != 0) {
                            arrayR = arrayR.filter(function (el) {
                                return el.id !== result[0].id;
                            });
                            p = paperR.getById(result[0].id);
                            if (p.id != selectedR.id)
                                p.attr({ fill: "white", "stroke-width": "2", stroke: 'black' });
        
                        }
                        arrayR.push(new data(selectedR.id, "blue"));
                    }
                });
        
                $('#colorGreen').click(function () {
                    if (selected != null) {
                        selected.attr({ fill: "green", "stroke-width": "2", stroke: 'black' });
                        var result = array.filter(function (obj) {
                            return obj.color == "green";
                        });
        
                        if (result.length != 0) {
                            array = array.filter(function (el) {
                                return el.id !== result[0].id;
                            });
                            p = paper.getById(result[0].id);
                            if (p.id != selected.id)
                                p.attr({ fill: "white", "stroke-width": "2", stroke: 'black' });
        
                        }
                        array.push(new data(selected.id, "green"));
                    }
                    if (selectedR != null) {
                        selectedR.attr({ fill: "green", "stroke-width": "2", stroke: 'black' });
                        var result = arrayR.filter(function (obj) {
                            return obj.color == "green";
                        });
        
                        if (result.length != 0) {
                            arrayR = arrayR.filter(function (el) {
                                return el.id !== result[0].id;
                            });
                            p = paperR.getById(result[0].id);
                            if (p.id != selectedR.id)
                                p.attr({ fill: "white", "stroke-width": "2", stroke: 'black' });
        
                        }
                        arrayR.push(new data(selectedR.id, "green"));
                    }
                });
		
		function makeLabel(round) {
            updateValues();
            //$('#title').show();
            showNumGrp();
            if (what == "") {
                if (round <= prct) {
                    $('#roundNumber').text('Set Up Practice Trial #');
                    $('#roundValue').val(round);
                }
                else {

                    $('#roundNumber').text('Set Up Test Trial #');
                    $('#roundValue').val((round - prct));
                }
            }
            else if (what == "prct") {
                $('#roundNumber').text('Set Up Practice Trial #');
                updateValues();
                var total = prct + trl;

                var currPrct = round - trl;


                $('#roundValue').val(prct);
                $('#roundValue').focus();
            }
            else {
                $('#roundNumber').text('Set Up  Test Trial #');
                $('#roundValue').val(trl);
                $('#roundValue').focus();
            }
        }
		
		function initFieldStart() {
            $('#start').empty();
            paper = new Raphael(document.getElementById('start'), paperWidth, paperHeight);

            var div = 'start';
            var p1x = 50;
            var p1y = 350;
            var p2x = 150;
            var p2y = 350;
            var p3x = 250;
            var p3y = 350;
            var p1l1 = 50;
            var p1l2 = 170;
            var p2l1 = 150;
            var p2l2 = 220;
            var p3l1 = 250;
            var p3l2 = 280;



            var rect = makeBase(paper, 20, 350, 260, 260, 5, baseColor, 40);
            var peg1 = makeLine("peg1", paper, p1x, p1y, p1l1, p1l2, pegColor, pegThick);
            var peg2 = makeLine("peg2", paper, p2x, p2y, p2l1, p2l2, pegColor, pegThick);
            var peg3 = makeLine("peg3", paper, p3x, p3y, p3l1, p3l2, pegColor, pegThick);

            //var ps1 = null;
            //var ps2 = null;
            //var ps3 = null;
            //var ps4 = null;
            //var ps5 = null;
            //var ps6 = null;

            var color = "white";
            ps1 = makeBall(paper, p1x, p1y - 5 * r, r, color, "p1");//paperWidth/2  = 500, 100
            ps2 = makeBall(paper, p1x, p1y - 3 * r, r, color, "p2");
            ps3 = makeBall(paper, p1x, p1y - r, r, color, "p3");
            ps4 = makeBall(paper, p2x, p2y - 3 * r, r, color, "p4");
            ps5 = makeBall(paper, p2x, p2y - r, r, color, "p5");
            ps6 = makeBall(paper, p3x, p3y - r, r, color, "p6");

            // var selected = makeBall(paper, p1x, p1y - 3 * r, r, color, "p2");;

            var array = [];
            //var selectedR = null;



            if (div == "start") {
                ps1 = paper.getById('p1-start');
                ps1.node.onclick = function () {
                    selected = ps1;
                    selectedR = null;
                    array = array.filter(function (el) {
                        return el.id !== 'p1-start';
                    });
                    deselectNode(ps1);
                    ps1.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });

                }
                ps2 = paper.getById('p2-start');
                ps2.node.onclick = function () {
                    selected = ps2;
                    selectedR = null;
                    array = array.filter(function (el) {
                        return el.id !== 'p2-start';
                    });
                    ps2.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                    deselectNode(ps2);

                }
                ps3 = paper.getById('p3-start');
                ps3.node.onclick = function () {
                    selected = ps3;
                    selectedR = null;
                    array = array.filter(function (el) {
                        return el.id !== 'p3-start';
                    });
                    ps3.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                    deselectNode(ps3);
                }
                ps4 = paper.getById('p4-start');
                ps4.node.onclick = function () {
                    selected = ps4;
                    selectedR = null;
                    array = array.filter(function (el) {
                        return el.id !== 'p4-start';
                    });
                    ps4.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                    deselectNode(ps4);

                }
                ps5 = paper.getById('p5-start');
                ps5.node.onclick = function () {
                    selected = ps5;
                    selectedR = null;
                    array = array.filter(function (el) {
                        return el.id !== 'p5-start';
                    });
                    ps5.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                    deselectNode(ps5);

                }
                ps6 = paper.getById('p6-start');
                ps6.node.onclick = function () {
                    selected = ps6;
                    selectedR = null;
                    array = array.filter(function (el) {
                        return el.id !== 'p6-start';
                    });
                    ps6.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                    deselectNode(ps6);

                }
            }
            


            function deselectNode(node) {
                if (ps1 != node) {
                    ps1.attr({ "stroke-width": "2", stroke: 'black' });

                }
                if (ps2 != node) {
                    ps2.attr({ "stroke-width": "2", stroke: 'black' });
                }


                if (ps3 != node) {
                    ps3.attr({ "stroke-width": "2", stroke: 'black' });
                }

                if (ps4 != node) {

                    ps4.attr({ "stroke-width": "2", stroke: 'black' });
                }

                if (ps5 != node) {

                    ps5.attr({ "stroke-width": "2", stroke: 'black' });
                }

                if (ps6 != node) {

                    ps6.attr({ "stroke-width": "2", stroke: 'black' });
                }
                 if (pe1 != node) {
                     pe1.attr({ "stroke-width": "2", stroke: 'black' });

                 }
                 if (pe2 != node) {
                     pe2.attr({ "stroke-width": "2", stroke: 'black' });
                 }


                 if (pe3 != node) {
                     pe3.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (pe4 != node) {

                     pe4.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (pe5 != node) {

                     pe5.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (pe6 != node) {

                     pe6.attr({ "stroke-width": "2", stroke: 'black' });
                 }

            }


            //=================================================================================================
            function makeBase(paper, m1, m2, l1, l2, round, color, size) {
                var obj = paper.rect(m1, m2, l1, l2, round);
                obj.attr({ fill: color, height: size });
            }

            function makeLine(num, paper, m1, m2, l1, l2, color, width) {
                var myPath = "M " + m1 + ", " + m2 + " L " + l1 + ", " + l2;
                var objName = paper.path(myPath);
                objName.attr({ stroke: color, "stroke-width": width });
                objName.id = num;
                return objName;

            }

            function makeBall(paper, p1, p2, r, color, id) {
                var ball = paper.circle(p1, p2, r);
                ball.attr({ fill: color, "stroke-width": "2", stroke: 'black' });
                if (color != null)
                    ball.id = id + "-" + div;

                return ball;
            }
        }

        function initFieldEnd() {
            $('#end').empty();
            paperR = new Raphael(document.getElementById('end'), paperWidth, paperHeight);

            var div = 'end';
            var p1x = 50;
            var p1y = 350;
            var p2x = 150;
            var p2y = 350;
            var p3x = 250;
            var p3y = 350;
            var p1l1 = 50;
            var p1l2 = 160;
            var p2l1 = 150;
            var p2l2 = 220;
            var p3l1 = 250;
            var p3l2 = 280;



            var rect = makeBase(paperR, 20, 350, 260, 260, 5, baseColor, 40);
            var peg1 = makeLine("peg1", paperR, p1x, p1y, p1l1, p1l2, pegColor, pegThick);
            var peg2 = makeLine("peg2", paperR, p2x, p2y, p2l1, p2l2, pegColor, pegThick);
            var peg3 = makeLine("peg3", paperR, p3x, p3y, p3l1, p3l2, pegColor, pegThick);



            var color = "white";
            var c1 = makeBall(paperR, p1x, p1y - 5 * r, r, color, "p1");//paperWidth/2  = 500, 100
            var c2 = makeBall(paperR, p1x, p1y - 3 * r, r, color, "p2");
            var c3 = makeBall(paperR, p1x, p1y - r, r, color, "p3");
            var c4 = makeBall(paperR, p2x, p2y - 3 * r, r, color, "p4");
            var c5 = makeBall(paperR, p2x, p2y - r, r, color, "p5");
            var c6 = makeBall(paperR, p3x, p3y - r, r, color, "p6");

            // var selected = null;
            // var selectedR = null;
            var arrayR = [];
            pe1 = paperR.getById('p1-end');
            pe1.node.onclick = function () {
                selectedR = pe1;
                selected = null;
                arrayR = arrayR.filter(function (el) {
                    return el.id !== 'p1-end';
                });
                deselectNode(pe1);
                pe1.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });

            }
            pe2 = paperR.getById('p2-end');
            pe2.node.onclick = function () {
                selectedR = pe2;
                selected = null;
                arrayR = arrayR.filter(function (el) {
                    return el.id !== 'p2-end';
                });
                pe2.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                deselectNode(pe2);

            }
            pe3 = paperR.getById('p3-end');
            pe3.node.onclick = function () {
                selectedR = pe3;
                selected = null;
                arrayR = arrayR.filter(function (el) {
                    return el.id !== 'p3-end';
                });
                pe3.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                deselectNode(pe3);
            }
            pe4 = paperR.getById('p4-end');
            pe4.node.onclick = function () {
                selectedR = pe4;
                selected = null;
                arrayR = arrayR.filter(function (el) {
                    return el.id !== 'p4-end';
                });
                pe4.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                deselectNode(pe4);

            }
            pe5 = paperR.getById('p5-end');
            pe5.node.onclick = function () {
                selectedR = pe5;
                selected = null;
                arrayR = arrayR.filter(function (el) {
                    return el.id !== 'p5-end';
                });
                pe5.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                deselectNode(pe5);

            }
            pe6 = paperR.getById('p6-end');
            pe6.node.onclick = function () {
                selectedR = pe6;
                selected = null;
                arrayR = arrayR.filter(function (el) {
                    return el.id !== 'p6-end';
                });
                pe6.attr({ fill: color, "stroke-width": "3", stroke: 'blue' });
                deselectNode(pe6);

            }



            function deselectNode(node) {
                 if (ps1 != node) {
                     ps1.attr({ "stroke-width": "2", stroke: 'black' });

                 }
                 if (ps2 != node) {
                     ps2.attr({ "stroke-width": "2", stroke: 'black' });
                 }


                 if (ps3 != node) {
                     ps3.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (ps4 != node) {

                     ps4.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (ps5 != node) {

                     ps5.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (ps6 != node) {

                     ps6.attr({ "stroke-width": "2", stroke: 'black' });
                 }
                if (pe1 != node) {
                pe1.attr({ "stroke-width": "2", stroke: 'black' });

                 }
                 if (pe2 != node) {
                     pe2.attr({ "stroke-width": "2", stroke: 'black' });
                 }


                 if (pe3 != node) {
                     pe3.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (pe4 != node) {

                     pe4.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (pe5 != node) {

                     pe5.attr({ "stroke-width": "2", stroke: 'black' });
                 }

                 if (pe6 != node) {

                     pe6.attr({ "stroke-width": "2", stroke: 'black' });
                 }

            }


            //=================================================================================================
            function makeBase(paper, m1, m2, l1, l2, round, color, size) {
                var obj = paper.rect(m1, m2, l1, l2, round);
                obj.attr({ fill: color, height: size });
            }

            function makeLine(num, paper, m1, m2, l1, l2, color, width) {
                var myPath = "M " + m1 + ", " + m2 + " L " + l1 + ", " + l2;
                var objName = paper.path(myPath);
                objName.attr({ stroke: color, "stroke-width": width });
                objName.id = num;
                return objName;

            }

            function makeBall(paper, p1, p2, r, color, id) {
                var ball = paper.circle(p1, p2, r);
                ball.attr({ fill: color, "stroke-width": "2", stroke: 'black' });
                if (color != null)
                    ball.id = id + "-" + div;

                ball.node.onclick = function () {

                }

                return ball;
            }
        }
    }

})();