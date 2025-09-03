
export function sort(jobs, by) {
    //takes jobs, an array of Job types
    //takes by, a string indicating what to sort by
    //returns a sorted array of jobs

    //if sort by name (alphabetical)
    if (by === "name") {
        //the "..." operator makes a spread of each element in an array
        //wrapping it in [] essentially makes a copy of the array
        return [...jobs].sort((a, b) => a.name.localeCompare(b.name));
    }

    //if sort by date applied (oldest first)
    if (by === "date") {
        return [...jobs].sort((a, b) => a.appliedOn - b.appliedOn);
    }

    //if sort by salary/wage (highest first)
    if (by === "salary") {
        return [...jobs].sort((a, b) => b.pay - a.pay);
    }

    //if sort by status (accepted > interview > applied > rejected)
    if (by === "status") {
        const priority = {
            //calculate prio by using object literal
            accepted: 4,
            interview: 3,
            applied: 2,
            rejected: 1
        };
        return [...jobs].sort((a, b) => priority[b.status] - priority[a.status]);
    }

    //if bad usage just return unsorted
    return jobs;
}

export function filter(jobs, by) {
    //takes jobs, an array of Job types
    //takes by, a string indicating what to filter by
    //returns a filtered array of jobs
    //NOTE: keep a backup of current jobs array when filter is removed

    return jobs;
}

//may be worth waiting to implement at a later date
export function search(jobs, by) {
    return;
}