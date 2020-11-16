class Sumclass extends EulerTour {
    visitExternal(T, p, r){
        r[1] = 0;
    }
 
    visitPostOrder(T, p, r){
 
        r[1] = r[0] + r[2] + p.element();
    }
 
    sum(T){
 
        return eulerTour(T, T.root())
    }
}
let mysum=new Sumclass()
console.log(mysum.sum(t0));
 
///new 
function maxOfTreeEulerTour (tree){

  class MaxOfTree extends EulerTour {

    visitExternal (T, p, result) {
      result[1] = -Infinity;
    }

    visitPostOrder (T, p, result) {
      result[1] = Math.max(result[0], result[2], p.element());
    }

  }

  let getMax = new MaxOfTree();

  if (tree.isEmpty()) return null;

  return getMax.eulerTour(tree, tree.root());

}

function callMaxOfTreeEulerTour () {

  let tree = getTree();
  return maxOfTreeEulerTour(tree);

}

