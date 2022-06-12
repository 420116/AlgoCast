// public static int findMaximumSustainableClusterSize(List<Integer> processingPower, List<Integer> bootingPower, long powerMax) {
//     // Write your code here
//     PriorityQueue<Integer> priorityQueue = new PriorityQueue<>((a, b) -> b - a);
//     int maxLength = 0;
//     int currentLength = 1;
//     int startIdx = 0;
//     int endIdx = 0;
//     int currentSumProcessingPower = processingPower.get(0);
//     priorityQueue.add(bootingPower.get(0));
//     while (endIdx < processingPower.size()) {
//         int currentBootingPower = priorityQueue.peek();
//         long currentPower = currentBootingPower + ((long) currentSumProcessingPower) * currentLength;

//         if (currentPower <= powerMax) {
//             maxLength = currentLength;
//             endIdx++;
//             currentLength++;
//         } else {
//             currentSumProcessingPower -= processingPower.get(startIdx);
//             priorityQueue.remove(bootingPower.get(startIdx));
//             startIdx++;
//             endIdx++;
//         }

//         if (endIdx < processingPower.size()) {
//             priorityQueue.add(bootingPower.get(endIdx));
//             currentSumProcessingPower += processingPower.get(endIdx);
//         }
//     }
//     return maxLength;

//     }

// }
