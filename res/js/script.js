$(function () {
    var user = new User(
        "Thomas",
        "Cook",
        "20/10/1998",
        "Computers N Stuff",
        4.2
    );
    var course = [
        new Course("Programming", 1, 91),
        new Course("Math", 1, 3),
        new Course("Math x2", 3, 1),
        new Course("OOP", 2, 100)
    ];
    init();

    function init(){
        $("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthday);
        $("#faculty").text(user.faculty);
        //$("#gpa strong").text(user.gpa);
        $("#gpa strong").text(calcGPA());

        $('#courses tr').not(':first').remove();
        var html = '';
        for(var i = 0; i < course.length; i++)
                    html += '<tr><td>' + (i+1) + '</td><td>' + course[i].title + 
                            '</td><td>' + course[i].semster + '</td><td>' + course[i].grade + '</td></tr>';
        $('#courses tr').first().after(html);

        $("#courses-button").click(function (){
            $("#profile-container").css("display","none");
            $("#courses-container").css("display","block");
            $("#courses-button").removeClass("pill").addClass("pill active")
            $("#profile-button").removeClass("pill active").addClass("pill")
        })
        $("#profile-button").click(function (){
            $("#courses-container").css("display","none");
            $("#profile-container").css("display","block");
            $("#profile-button").removeClass("pill").addClass("pill active")
            $("#courses-button").removeClass("pill active").addClass("pill")
        })
        $("#add-course-button").click(function (){
            $("#add-course").toggle();
        })
        $("#save-course").click(function (){
            newC = new Course($("#title").val(),$("#semester").val(),$("#grade").val());
            course.push(newC);
            html = '<tr><td>' + (i+1) + '</td><td>' + newC.title + 
                            '</td><td>' + newC.semster + '</td><td>' + newC.grade + '</td></tr>';
            $('#courses tr').last().after(html);
            $("#add-course").hide();
            $("#title").val("");
            $("#semester").val("");
            $("#grade").val("");
            $("#gpa strong").text(calcGPA());
        })
        $("#cancel-course").click(function (){
            $("#add-course").hide();
            $("#title").val("");
            $("#semester").val("");
            $("#grade").val("");
        })
    }

    function calcGPA() {
        sum = 0;
        count = 0
        course.forEach(e => {
            count +=1;
            grade = e.grade;
            console.log(grade);
            if (grade > 90) {
                sum +=4;
            }
            else if (grade > 80 && grade <=90) {
                sum +=3;
            }
            else if (grade > 70 && grade <=80) {
                sum +=2;
            }
            else if (grade > 60 && grade <=70) {
                sum +=1;
            }
            else if (grade > 50 && grade <=60) {
                sum +=0.5;
            }
            else {}
        });
        return sum/count;
    }



});

