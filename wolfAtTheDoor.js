function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf')
    if(position === 0){
      return "Pls go away and stop eating my sheep"
    } else return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
    }
    