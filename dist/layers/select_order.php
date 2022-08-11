<form method="POST" action="controllers/mark_profit.php" id="form-mark-profit">
    <input type="hidden" name="save"value="save">
    <div class="view-order justify-content-between flex-row">
        <div class="d-flex flex-column w-100">
            <div class="d-flex">
                <label class="font-weight-bold text-nowrap mr-2 mb-0 align-self-center">Target Order ID:</label>
                <input type="text" name="target" id="target" class="form-control style-0 text-white" readonly>
            </div>
            <div class="d-flex">
                <label class="text-nowrap text-warning">SelectOrder ID: </label>
                <input type="text" name="dest" id="select-order" class="style-0 form-control text-break text-white" readonly>
            </div>
            
        </div>
        <div class="d-flex flex-column">
            <button type="submit" class="btn btn-warning mb-2">Confirm</button>
            <button type="button" data-dismiss="select-order" class="btn btn-light btn-sm">Cancel</button>
        </div>
    </div>
</form>