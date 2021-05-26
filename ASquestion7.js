function text(msg)
{
   if ((msg===null) || (msg===''))
       return false;
  else
   msg = msg.toString();
  return msg.replace(/<[^>]*>/g, '');
}

console.log(text('<p><strong><em>SkillSanta Assignments</em></strong></p>'));
