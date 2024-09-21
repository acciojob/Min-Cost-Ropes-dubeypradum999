import heapq

def mincost(arr):
    # Create a min-heap from the array of rope lengths
    heapq.heapify(arr)
    total_cost = 0
    
    # Continue until there's only one rope left
    while len(arr) > 1:
        # Pop the two shortest ropes
        first = heapq.heappop(arr)
        second = heapq.heappop(arr)
        
        # Calculate the cost to connect them
        cost = first + second
        total_cost += cost
        
        # Push the connected rope back into the heap
        heapq.heappush(arr, cost)
    
    return total_cost

# Test cases
print(mincost([4, 3, 2, 6]))  # Output: 29
print(mincost([1, 2, 3, 4, 5]))  # Output: 33
