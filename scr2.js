const n = 10;
        let array = [];

        initArray();

        function initArray() {
            array = [];
            for (let i = 0; i < n; i++) {
                array[i] = Math.random();
            }
            displayArray();
        }

        function startSorting() {
            const swaps = bubbleSort([...array]);
            animateSorting(swaps);
        }

        function animateSorting(swaps) {
            if (swaps.length === 0) {
                displayArray();
                return;
            }

            const [i, j] = swaps.shift();
            [array[i], array[j]] = [array[j], array[i]];
            displayArray([i, j]);

            setTimeout(function () {
                animateSorting(swaps);
            }, 200);
        }

        function bubbleSort(array) {
            const swaps = [];
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length - i - 1; j++) {
                    if (array[j] > array[j + 1]) {
                        swaps.push([j, j + 1]);
                        [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    }
                }
            }
            return swaps;
        }

        function displayArray(indices = []) {
            const container = document.getElementById('container');
            container.innerHTML = '';

            for (let i = 0; i < array.length; i++) {
                const bar = document.createElement('div');
                bar.className = 'bar';
                bar.style.height = `${array[i] * 300}px`;

                if (indices.includes(i)) {
                    bar.style.backgroundColor = 'red';
                }

                container.appendChild(bar);
            }
        }

        function resetArray() {
            initArray();
        }