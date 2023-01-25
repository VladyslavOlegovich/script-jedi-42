// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error();
  }
  return job.maxSalary >= candidate.minSalary - candidate.minSalary / 10;
}

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8

// original name of function is 'match', but I changed it to 'matchR2D2',
//  becouse the first function has same name in the file
function matchR2D2(job, candidates) {
  const arr = candidates.filter((candidate) => {
    return (
      (candidate.desiresEquity && job.equityMax) || !candidate.desiresEquity
    );
  });
  const res = arr.filter((candidate) => {
    return (
      job.locations.includes(candidate.currentLocation) ||
      job.locations.includes(candidate.desiredLocations[0]) ||
      job.locations.includes(candidate.desiredLocations[1])
    );
  });
  return res;
}
