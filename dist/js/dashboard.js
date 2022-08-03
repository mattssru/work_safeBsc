$(document).ready(function(){
    var table = $("#list-history").DataTable({
        processing: false,
        serverSide: false,
        ajax: { 
            url: "./api/get-transaction?q="+Math.random(), 
            type: "POST" ,
            data: {key_id: $('#_key').val()}
        },
        createdRow: function (row, data, dataIndex) {
            $(row).addClass('text-white-dimming');
        },
        columns: [
            { 
                data: "date",
                render: function(data, type, row, meta){
                    let mc = matchCoin(row.pair);
                    let $data = `
                        <div class="hide-mobile">${data}</div>
                        <div class="show-mobile">
                            <div class="row justify-content-between">
                                <div class="col">
                                    <img src="dist/icons/crypto/icons/${mc.base.toLowerCase()}.png" class="size-20 bg-white-rounded" onerror="this.onerror=null;this.src='dist/icons/crypto/icons/empty-token.png';"> ${row.pair}
                                </div>
                                <div class="col f-8 text-muted text-right">
                                    ${row.date}
                                </div>
                            </div>
                            <div class="row mt-2 f1" >
                                <div class="col-12 f-8">
                                    <span class="${row.isBuyer == 0 ? 'text-danger' : 'text-success'}">${row.isBuyer == 0 ? 'SELL' : 'BUY'}</span>
                                </div>
                                <div class="text-muted col-6">Price (${mc.match})</div>
                                <div class="text-right col-6">${real_format(row.price,6)}</div>
                                <div class="text-muted  col-6">Executed (${mc.base})</div>
                                <div class="text-right col-6">${real_format(row.qty,2)}</div>
                                <div class="text-muted col-6">Free (${row.commissionAsset})</div>
                                <div class="text-right col-6">${row.commission}</div>
                                <div class="text-muted col-6">Total (${mc.match})</div>
                                <div class="text-right col-6">${real_format(row.quoteQty,2)}</div>
                            </div>
                        </div>
                        
                        
                        `;
                    return type == "display" ? $data : '';
                }
            },
            { 
                data: "pair",
                render: function(data, type, row, meta){
                    let mc = matchCoin(data);
                    let $data = `<img src="dist/icons/crypto/icons/${mc.base.toLowerCase()}.png" class="size-20 bg-white-rounded" onerror="this.onerror=null;this.src='dist/icons/crypto/icons/empty-token.png';"> ${data}`;
                    return type == "display" ? $data : '';
                }
            },
            { 
                data: "isBuyer",
                render: function(data, type, row, meta){
                    let $data = (data == 1 ? `<span class="text-success">Buy</span>` : `<span class="text-danger">Sell</span>`);
                    return type == "display" ? $data : '';
                }
            },
            { 
                data: "price",
                render: function(data, type, row, meta){
                    let $data = real_format(data,6);
                    return type == "display" ? $data : $data;
                }
            },
            { data: "qty" },
            { 
                data: "commission",
                render: function(data, type, row, meta){
                    let $data = `${real_format(data,8)} ${row.commissionAsset}`;
                    return type=="display" ? $data : '';
                }
            },
            { 
                data: "quoteQty",
                render: function(data, type, row, meta){
                    let mc = matchCoin(row.pair);
                    let $data = `${real_format(data,8)} ${mc.match}`;
                    return type == "display" ? $data : '';
                }
            }
        ],
        columnDefs: [
            {
                targets: [0],
                className: "text-nowrap"
            },
            {
                targets: [1, 2, 3, 4, 5],
                className: "hide-mobile"
            },
            {
                targets: [6],
                className: "text-nowrap hide-mobile"
            }
        ],
        dom: "<'justify-content-end d-flex text-right'>"+"<'w-100't>" + "<'d-flex flex-column flex-sm-row justify-content-between'<'mr-auto'i> <'ml-auto 'p>>",
        pageLength: 10,
        order: [[0, "DESC"]],
        language: { paginate: { previous: "&laquo;", next: "&raquo;" }, zeroRecords: '<h3 class="text-center text-muted p-3">Not Found Data.</h3>' },
        bLengthChange: false,
        fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
            return `${iStart} - ${iEnd} From ${iTotal} Record`;
        }
    });

    $("#search-history").on("keyup change", function () {
        var $this = $(this).val();
        if ($this != "") {
            $(".box-search i.fa-times").show();
        } else {
            $(".box-search i.fa-times").hide();
        }

        table.search(this.value).draw();
    });
    $(".box-search i.fa-times").click(function(){
        $("#search-history").val('')
        $(this).hide();
    });
    getColor= async function(img) {
        var Canvas2 = $("#canvas2")[0];
        var Context2 = Canvas2.getContext("2d");
        var image = new Image();
        image.src = img;
        Context2.drawImage(image, 0, 0);
        const c = Context2.getImageData(35,13, 1, 1).data;
        
        return c;
    }
    async function getImageColor(img='') {
        const c = await getColor(img);
        let r = c[0];
        let g = c[1];
        let b = c[2];
        let maxcolor = 80;
        if(r < maxcolor && g < maxcolor && b < maxcolor) {
            r = 150;
            g = 150;
            b = 150;
        }

        if(c[0] === 0 && c[1] === 0 && c[2] === 0){
            const c2 = getColor(img);
        }
        return {
            "thick":`rgba(${r},${g},${b},1)`,
            "light":`rgba(${r},${g},${b},.5)`
        }
    }
    async function getChart(arr) {
        let data=[];
        let label = [];
        let price = [];
        let bg = [];
        let border = [];
        
        let temp_percent = 0;
        let temp_price = 0;
        for (var i in arr) {
            if(i < 5){
                let lower = (arr[i].symbol).toLowerCase();
                let img = `./dist/icons/crypto/icons/${lower}.png`;
                data.push((arr[i].percent)*1);
                label.push(arr[i].symbol);
                price.push(arr[i].price);
                let colors = await getImageColor(img);
                bg.push(colors.light);
                border.push(colors.thick);
            }
            else{
                temp_percent+=(arr[i].percent)*1;
                temp_price+=arr[i].price;
            }
        }
        if(arr.length > 0) {
           
            data.push(temp_percent);
            label.push('Other');
            price.push(temp_price);
            bg.push('rgba(178, 184, 192)');
            border.push('rgba(178, 184, 192)');

            var ctx = document.getElementById('chart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: label,
                    datasets: [{
                        label: '# of Votes',
                        data: data,
                        backgroundColor: bg,
                        backgroundColorThick: border,
                        borderColor: border,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    cutoutPercentage: 80, 
                    tooltips: {
                        enabled: true,
                        callbacks: {
                            label: function (tooltipItem, data) {
                                return data['labels'][tooltipItem["index"]] +' '+data["datasets"][0]["data"][tooltipItem["index"]].toFixed(2) + " %";
                            },
                        },
                    },
                    
                    legend: { display: false},
                    legendCallback: function (chart) {
                        var legendHtml = [];
                        legendHtml.push("<ul>");
                        var item = chart.data.datasets[0];
                        let tempdata = 0;
                        for (var i = 0; i < item.data.length; i++) {
                            if(i < 5){
                                legendHtml.push("<li>");
                                legendHtml.push('<span class="chart-legend" style="background-color:' + item.backgroundColorThick[i] + ';margin: 6px 8px 6px 0;"></span>');
                                legendHtml.push('<span class="chart-legend-label-text">' + chart.data.labels[i] + ' <strong style="color:' + item.backgroundColorThick[i] + '">' + item.data[i].toFixed(2) + " %</strong></span>");
                                legendHtml.push("</li>");
                            }
                            else{
                                tempdata += item.data[i];
                            }
                            
                            
                        }
                        legendHtml.push("<li>");
                        legendHtml.push('<span class="chart-legend" style="margin: 6px 8px 6px 0;"></span>');
                        legendHtml.push('<span class="chart-legend-label-text">Other <strong style="color:#ddd">' + tempdata.toFixed(2) + " %</strong></span>");
                        legendHtml.push("</li>");
                        legendHtml.push("</ul>");
                        return legendHtml.join("");
                    },
                }
            });
            $('#my-legend-con').html(myChart.generateLegend());
        }
        else{
            $('.estimate-month').hide();
        }
        
       
    }
    function getData(){
        $.ajax({
            url: `./api/order?${$('#_key').val()}`,
            type: 'POST',
            data: '',
            success: function(res){
                const obj = $.parseJSON(res);
                obj['order'].sort((a,b)=>{
                    return b.updateTime-a.updateTime;
                });
               
                let content = '';
                $('#countorder').html(` (${obj['order'].length})`);
                $.each(obj['order'], function(k, v){
                    let time = v.updateTime;
                    let mc = matchCoin(v.symbol);
                    content+=`<tr class="text-left text-white-dimming">
                        <td class="text-nowrap">
                            <div class="hide-mobile">${formatDate(time)}</div>
                            <div class="show-mobile">
                                <div class="row justify-content-between">
                                    <div class="col">
                                        <img src="dist/icons/crypto/icons/${mc.base.toLowerCase()}.png" class="size-20 bg-white-rounded" onerror="this.onerror=null;this.src='dist/icons/crypto/icons/empty-token.png';"> ${v.symbol}
                                    </div>
                                    <div class="col f-8 text-muted text-right">
                                        ${formatDate(time)}
                                    </div>
                                </div>
                                <div class="row mt-2 f1" >
                                    <div class="col-12 f-8">
                                        <span class="${(v.side == 'SELL' ? 'text-danger' : 'text-success')}">${v.type}/${v.side}</span>
                                    </div>
                                    <div class="text-muted col-6">Price (${mc.match})</div>
                                    <div class="text-right col-6">${real_format(v.price,6)}</div>
                                    <div class="text-muted  col-6">Amount (${mc.base})</div>
                                    <div class="text-right col-6">${real_format(v.origQty,2)}</div>
                                    <div class="text-muted col-6">Total (${mc.match})</div>
                                    <div class="text-right col-6">${real_format((v.price * v.origQty).toFixed(5)*1,5)} ${mc.match}</div>
                                </div>
                            </div>
                        </td>
                        <td class="hide-mobile">
                            <img src="dist/icons/crypto/icons/${mc.base.toLowerCase()}.png" class="bg-white-rounded size-20"  onerror="this.onerror=null;this.src='dist/icons/crypto/icons/empty-token.png';"> ${v.symbol}
                        </td>
                        <td class="hide-mobile text-capitalize">${v.type}</td>
                        <td class="hide-mobile  ${(v.side == 'SELL' ? 'text-danger' : 'text-success')}">${v.side}</td>
                        <td class="hide-mobile">${real_format(v.price*1,6)}</td>
                        <td class="hide-mobile">${real_format(v.origQty*1,4)}</td>
                        <td class="hide-mobile text-nowrap">${real_format((v.price * v.origQty).toFixed(5)*1,5)} ${mc.match}</td>
                    </tr>`;
                    
                });
                if(content == '') {
                    content = `<tr>
                        <td colspan="7">
                            <h3 class="text-muted text-center">Not Found Orders.</h3>
                        </td>
                    </tr>`;
                }
                $('#tb-order').html(content);
                
            },
            error: function(xhr){
                /**some code */
            }
        });
    }

    function getBalance(){
        let currency = $('#currency').val()*1;
        let currency_symbol = $('#currency_symbol').val();

        
        $.ajax({
            url: `./api/balance?${$('#_key').val()}`,
            type: 'POST',
            data: '',
            success: function(res){
                const obj = $.parseJSON(res);
                let content = '';
                let sumEstimate = 0;
                let newData = [];
                let graph = [];
                let asset_all = 0;
                let btcprice = obj['btc'];
                $.each(obj['balance'], function(k, v){
                    
                    let estimate = ((v.balance*(v.p*1)) * currency)*1;
                    asset_all+=v.balance*(v.p*1);
                    sumEstimate+=(v.balance*(v.p*1));
                    
                    newData.push({
                        symbol: v.name,
                        price: estimate,
                        dolla: (v.balance*(v.p*1))
                    });

                    content+=` <tr class="text-left text-white-dimming">
                        <td class="text-nowrap">
                            <img class="bg-light rounded-pill mr-1" src="dist/icons/crypto/icons/${v.name.toLowerCase()}.png" onerror="this.onerror=null;this.src='dist/icons/crypto/icons/empty-token.png';" width="20" height="20"/> ${v.name}
                            <div class="show-mobile">
                                <p class="mb-0 f-8 text-white-dimming">Available: ${v.available}</p>
                                <p class="mb-0 f-8 text-white-dimming">OnOrder: ${v.onOrder}</p>
                            </div>
                        </td>
                        
                        <td class="hide-mobile">${v.available}</td>
                        <td class="hide-mobile">${v.onOrder}</td>
                        <td class="text-right">${real_format(v.balance*1,8)}<p class="mb-0 f-8 text-muted">≈ ${real_format(estimate)}${currency_symbol}</p></td>
                    </tr>`;
                });
                let calcbtc = 0;
                if(asset_all > 0) {
                    calcbtc = asset_all/btcprice;
                    $('#diff_total').html(real_format(calcbtc,8));
                    $('.sub_diff_total').html(real_format(asset_all*currency)+currency_symbol);
                }
                
                newData.sort((a,b)=>{
                    return b.price-a.price;
                });
                new Promise((resolve, reject)=>{
                    newData.forEach((rows)=>{
                        graph.push({
                            percent: ((rows.price/(sumEstimate*currency)*1)*100).toFixed(2),
                            symbol: rows.symbol,
                            price: (rows.price).toFixed(2)
                        });
                    });
                    resolve(graph);
                }).then(()=>{
                    getChart(graph);
                });
                
                
                if(content == '') {
                    content = `<tr>
                        <td colspan="4">
                            <h4 class="text-muted text-center">Not Found Assets.</h4>
                        </td>
                    </tr>`;
                }
                $('#balance').html(content);
            },
            error: function(xhr){
                /**some error code */
            }

        });
    }
    if($('#_key').val() != ""){
        $('.btn-start-position').remove();
        getData();
        getBalance();
        setInterval(function(){
            getData();
            getBalance();
        },30000);
        
    }
});
