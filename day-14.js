// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/
function match(candidates, job) {
  for (const jobSkill of job.skills) {
    let found = false;
    for (const candidateSkill of candidates.skills) {
      if (jobSkill.name === candidateSkill.name) {
        if (candidateSkill.preference === 'avoid') {
          return false;
        }
        if (candidateSkill.preference === 'desired') {
          candidateSkill.experience *= 1.5;
        }
        if (candidateSkill.experience < jobSkill.idealYears) {
          return false;
        }
        found = true;
        // цю частину, з 18 рядку, і фішку з found мені допоміг зробити мій новий друг - Copilot :)
      } else {
        for (const jobSub of jobSkill.substitutions) {
          if (jobSub.name === candidateSkill.name) {
            if (candidateSkill.preference === 'avoid') {
              return false;
            }
            if (candidateSkill.preference === 'desired') {
              candidateSkill.experience *= 1.5;
            }
            if (candidateSkill.experience < jobSkill.idealYears) {
              return false;
            }
            found = true;
          }
        }
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
}
