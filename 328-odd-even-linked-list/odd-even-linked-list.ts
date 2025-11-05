/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
//   if(!head || !head.next) return null;
//   let dummy1 = new ListNode(-1);
//   let dummy2 = new ListNode(-1);
//   let odd = dummy1;
//   let even = dummy2;
//   let curr = head;
//   while(curr){
//     if(curr.val%2 == 0){
//         even.next = curr;
//         even = even.next;
//     } else {
//         odd.next = curr;
//         odd = odd.next;
//     }
//     curr = curr.next;
//   }
//   odd.next = dummy2.next
//   even.next = null

//   return dummy1.next

if(!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenhead = even;
    while(even&& even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenhead;
    return head;
};