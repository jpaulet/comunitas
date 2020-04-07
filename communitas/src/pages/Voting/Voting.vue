<template>
    <div class="wrapper wrapper-content">
        <div class='row'>
            <button class='btn btn-primary' style='position: absolute; top: -48px; right:0px;'>+ Create New Proposition</button>
        </div>
        <div class="row mt-3">
            
            <h3 class='col-12 mt-3'>Active Votings (6)</h3>
            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>31</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#/dao/voting/41" class="vote-title">
                                Redesign the top floor of the NY Hostel
                            </a>

                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">66</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">4 Months ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Design Team</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (30%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="30" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (70%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="70" :max="100" />
                        </div>
                    </div>
                </div>
            </div>

            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>77</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#/dao/voting/41" class="vote-title">
                                Contract 2 professional nurses for BCN Eldery Cohousing - 2200€/month 
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">55</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">29 Days ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Andrew Williams</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (84%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="65" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (16%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="35" :max="100" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>14</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#/dao/voting/41" class="vote-title">
                                Add a communal kitchen on the Madrid Cohousing (3200€)
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">2</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">3 days ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Elena Garcia</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (72%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="65" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (28%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="35" :max="100" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>6</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#/dao/voting/41" class="vote-title">
                                Buy a land parcel on Moraleja District (Madrid)
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">15</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">6 days ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Maria José Delgado</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (65%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="65" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (35%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="35" :max="100" />
                        </div>
                    </div>
                </div>
            </div>

            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>46</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#/dao/voting/41" class="vote-title">
                                Design proposition for BCN Eldery House
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">20</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">1 week ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Jeremy Gold</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (52%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="52" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (48%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="48" :max="100" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>11</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#/dao/voting/41" class="vote-title">
                                Marketing Campaing in BCN (+500€)
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">51</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">9 Days ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Marketing Team</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (93%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="93" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (7%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="7" :max="100" />
                        </div>
                    </div>
                </div>
            </div>

            <h3 class='col-12 mt-5'>Past Votings</h3>
            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>53</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#/dao/voting/41" class="vote-title">
                                Contact with NY House Department - Interview
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">7</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">21 Days ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Regina Fuch</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (59%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="59" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (41%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="41" :max="100" />
                        </div>
                        <div class='col-12 mb-3'>
                            <i class='fa fa-check text-success'> Approved </i>
                        </div>
                    </div>
                </div>
            </div>

            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>2</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#" class="vote-title">
                                Garden Design Proposition (Tree & Landscape) - 1120€
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">22</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">28 Days Ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Armin Degeneres</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (96%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="96" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (4%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="4" :max="100" />
                        </div>
                        <div class='col-12 mb-3'>
                            <i class='fa fa-check text-success'> Approved </i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>77</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#" class="vote-title">
                                Contract 2 professional nurses for BCN Eldery Cohousing - 2200€/month 
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">55</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">29 Days ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Andrew Williams</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (77%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="77" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (23%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="23" :max="100" />
                        </div>
                        <div class='col-12 mb-3'>
                            <i class='fa fa-check text-success'> Approved </i>
                        </div>
                    </div>
                </div>
            </div>

            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>16</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#" class="vote-title">
                                Barbacue space for Madrid Cohousing (>800€)
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">6</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">2 Months ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Laura Palmer</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (12%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="12" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (88%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="88" :max="100" />
                        </div>
                        <div class='col-12 mb-3'>
                            <i class='fa fa-times text-danger'> Rejected </i>
                        </div>
                    </div>
                </div>
            </div>

            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>29</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#" class="vote-title">
                                Buy a table pool for NY Hostel - 200€
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">5</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">3 Months ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Martin J.</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (40%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="40" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (60%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="60" :max="100" />
                        </div>
                        <div class='col-12 mb-3'>
                            <i class='fa fa-times text-danger'> Rejected </i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class='col-4' style='padding:10px;'>
                <div class="vote-item">
                    <div class="row">
                        <div class="col-12">
                            <div class="vote-actions">
                                <a href="#">
                                    <h5 class="text-navy">
                                        <i class="fa fa-play fa-rotate-270"></i>
                                    </h5>
                                </a>
                                <div>31</div>
                                <a href="#">
                                    <h5 class="text-danger">
                                        <i class="fa fa-play fa-rotate-90"></i>
                                    </h5>
                                </a>
                            </div>
                            <a href="#" class="vote-title">
                                Redesign the top floor of the NY Hostel
                            </a>
                            <div class="vote-info">
                                <i class="fa fa-comments-o mr-1"></i> <a href="#">66</a>
                                <i class="fa fa-clock-o ml-3 mr-1"></i> <a href="#">4 Months ago</a>
                                <i class="fa fa-user ml-3 mr-2"></i> <a href="#">Design Team</a>
                            </div>
                        </div>
                        <div class="col-12 mt-4 mb-3">
                            <span style='font-size:9px;display:block;'>Yes (92%):</span>
                            <b-progress class="mb-xs" style="height: 5px;" variant="success" :value="92" :max="100" />
                            <span style='margin-top:10px;font-size:9px;display:block;'>No (35%): </span>
                            <b-progress class="mb" style="height: 5px;" variant="danger" :value="8" :max="100" />
                        </div>
                        <div class='col-12 mb-3'>
                            <i class='fa fa-check text-success'> Approved </i>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
</template>

<script>
export default {
  name: 'Voting'
}
</script>

<style scoped>
/* Vote list */
.vote-item {
  padding: 20px 25px;
  background: #ffffff;
  border: 1px solid #e7eaec;
  margin-bottom:20px;  
}
.vote-item:last-child {
  border-bottom: 1px solid #e7eaec;
}
.vote-item:hover {
  background: #fbfbfb;
}
.vote-actions {
  float: left;
  width: 30px;
  margin-right: 15px;
  text-align: center;
}
.vote-actions a {
  color: #1ab394;
  font-weight: 600;
}
.vote-actions {
  font-weight: 600;
}
.vote-title {
  display: block;
  color: inherit;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
}
.vote-title:hover,
.vote-title:focus {
  color: inherit;
}
.vote-info,
.vote-title {
  margin-left: 45px;
}
.vote-info,
.vote-info a {
  color: #b4b6b8;
  font-size: 12px;
}
.vote-info a {
  margin-right: 10px;
}
.vote-info a:hover {
  color: #1ab394;
}
.vote-icon {
  text-align: right;
  font-size: 38px;
  display: block;
  color: #e8e9ea;
}
.vote-icon.active {
  color: #1ab394;
}
body.body-small .vote-icon {
  display: none;
}
.text-success {
  color: #1ab394 !important;
}
</style>