/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = { next: head};
    let prev = dummy;
    for(let i=0; i< left-1; i++){
        prev = prev.next;
    }
    let curr = prev.next;
    for(let i=0; i< right-left ; i++){
        let NEXT = curr.next;
        curr.next = NEXT.next;
        NEXT.next = prev.next;
        prev.next = NEXT;
    }
    return dummy.next;
};