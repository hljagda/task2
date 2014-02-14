/*Word Frequency
* Author: Hardik Jagda
*/

$(document).ready(function()
{ 

  $('#frmProcess').submit(function()
  {
    $('.hideOnReset').hide(); //To Hide Previous Results
    

    //MAIN CODE STARTS HERE


    //CONCATENATING TEXTBOX VALUES
    var txt = $('#txt1').val() +  " " + $('#txt2').val() +  " " + $('#txt3').val() +  " " + $('#txt4').val() +  " " + $('#txt5').val();


    //CHECKING EMPTY VALUES
    if($.trim(txt) === "")
    {
      $('#err').html('Cannot Accept Empty Values!');
      return false;
    }
    else
      $('#err').html('');
    

    //REMOVING STANDARD PUNCTUATIONS (.) (,) (!) (?) 
    txt = txt.split('.').join('');
    txt = txt.split(',').join('');
    txt = txt.split('!').join('');
    txt = txt.split('?').join('');

    
    //ADDING ALL WORDS TO ARRAY
    var result = txt.split(" ");
    console.log('FIRST=' + result);
    
    //DELETING EMPTY ELEMENTS (DUE TO ACCIDENTAL EXTRA SPACES)
    for(var i=0; i<result.length; i++)
    {
      if(result[i] === "")
      {
        console.log('DELETING ELEMENT AT POSITION= ' + i + ' OF RESULTSET. REASON: EMPTY ELEMENT.');
        result.splice(i,1);
        i--;
      }              
    }

    

    //CONVERTING TO LOWERCASE
    for(var j=0; j<result.length; j++)
    {
      result[j] = result[j].toLowerCase();
    }
    
    //SORTING ARRAY
    result.sort();
    console.log('sorted array result=' + result);



    //PROCESSING WORDS


    var frequency = [];
    var m;
    for(m=0; m<result.length; m++)
    {
      var ctr=1;
      for(var n=m+1; n<=result.length; n++)
      {
        if(result[m] === result[n])
        {
          ctr++;
        }
        else
        {                
          m += ctr-1;                
          console.log('result length=' + result.length + ' value of m is= ' + m + ' result= ' + result);
          break;
        }
      }
      
      frequency.push(ctr + "=" + result[m]);
      console.log('Adding frequency of ' + ctr + ' to the word ' + result[m]);
    }


    //SORTING FINAL ARRAY
    
    frequency.sort();
    //frequency.reverse(); 
    console.log(frequency);    


    //PRINTING STATS
    $('#result').append('<p class="bg-success stats text-center hideOnReset">Number of Unique Words = ' + frequency.length + '</p>');
    $('#result').append('<p class="h3 hideOnReset">Word Frequency</p>');
    
    

    //PRINTING VALUES IN DESCENDING ORDER

    for(var z=0; z<frequency.length; z++)
    {
      var str = frequency[z].split('=');
      console.log(str);
      $('#result').after('<p class="bg-warning padding5px hideOnReset">' + str[1] + '=' + str[0] + '</p>');
    }          

  });
  

});

