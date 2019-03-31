using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2
{
    public static class Numbers
    {
        public static int check(int[] arr1, int[] arr2, int m, int n, int s1, int s2, int k)
        {
            if (s1 == m)
                return arr2[s2 + k - 1];
            if (s2 == n)
                return arr1[s1 + k - 1];
            if(k <1 || k>(m-s1 )+ (n- s2))
            {
                throw new Exception("erorr valid k");
            }
            if(k ==1 )
            {
                return arr1[s1] < arr2[s2] ? arr1[s1] : arr2[s2];
            }

            int current = k / 2;
            if(m -s1 < current)
            {
                if (arr1[m - 1] < arr2[s2 + current - 1])
                    return arr2[s2 + (k - (m - s1) - 1)];
                else
                    return check(arr1, arr2, m, n , s1 ,s2 + current,k - current);
  
            }
            else if(n-s2 < current)
            {
                if (arr2[n - 1] < arr1[s1 + current - 1])
                    return arr1[s1 + (k - (n - s2) - 1)];
                else
                    return check(arr1, arr2, m, n, s1 + current, s2, k - current);

            }
            else
            {
                if (arr1[s1 + current - 1] < arr2[s2 + current - 1])
                    return check(arr1, arr2, m, n, s1 + current, s2, k - current);
                else
                    return check(arr1, arr2, m, n, s1, s2 + current, k - current);

              
            }

        }
       
    }
}
