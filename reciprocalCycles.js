function reciprocalCycles(n) {
    let d_longest_cycle_length = 0;
    let longest_cycle_length = 0;
    for(let i=2;i<=n;i++){
        let reminder = 1;
        let reminders_seen = {};
        for(let j=0;j<i;j++){
            reminder = (reminder*10)%i;

            if(reminder===0)
                break;

            if(reminder in reminders_seen){
                let cycle_length = j-reminders_seen[reminder];
                if(cycle_length>longest_cycle_length){
                    longest_cycle_length=cycle_length;
                    d_longest_cycle_length= i;
                }  
                break
            }

            reminders_seen[reminder] = j;
        }
    }
    return d_longest_cycle_length;
  }
  reciprocalCycles(7);