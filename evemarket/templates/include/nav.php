<nav class="navigation">
	<!-- START Navbar -->
	<div class="navbar-inverse navbar navbar-fixed-top">
		<div class="container-fluid">

			<div class="navbar-header">
				<a class="current navbar-brand" href="/toon">
					<img alt="Metz Logo" class="h-20" src="/assets/images/logo.png">
				</a>
				<button class="action-right-sidebar-toggle navbar-toggle collapsed" data-target="#navdbar" data-toggle="collapse" type="button">
					<i class="fa fa-fw fa-align-right text-white"></i>
				</button>
				<button class="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
					<i class="fa fa-fw fa-user text-white"></i>
				</button>
				<button class="action-sidebar-open navbar-toggle collapsed" type="button">
					<i class="fa fa-fw fa-bars text-white"></i>
				</button>
			</div>

			<div class="collapse navbar-collapse" id="navbar">

				<!-- START Search Mobile -->
				<div class="form-group hidden-lg hidden-md hidden-sm">
					<div class="input-group hidden-lg hidden-md">
						<input type="text" class="form-control" placeholder="Search for...">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button"><i class="fa fa-fw fa-search"></i></button>
						</span>
					</div>
				</div>
				<!-- END Search Mobile -->

				<!-- START Left Side Navbar -->
				<ul class="nav navbar-nav navbar-left clearfix yamm">

					<!-- START Switch Sidebar ON/OFF -->
					<li id="sidebar-switch" class="hidden-xs">
						<a class="action-toggle-sidebar-slim" data-placement="bottom" data-toggle="tooltip" href="#" title="Slim sidebar on/off">
							<i class="fa fa-lg fa-bars fa-fw"></i>
						</a>
					</li>
					<!-- END Switch Sidebar ON/OFF -->

					<!-- START Menu Only Visible on Navbar -->
					<li id="top-menu-switch" class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Menu <i class="fa fa-fw fa-caret-down"></i></a>
					</li>
					<!-- END Menu Only Visible on Navbar -->
					<?php 
						if(empty($_SESSION['code'])){
					?>
						<a href="https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=https%3A%2F%2Feve.pvpguild.com%2Feveauth&client_id=07b8bb74fe6144a4b14455d95bb5344d&scope=publicData%20esi-killmails.read_killmails.v1%20esi-assets.read_assets.v1%20esi-markets.read_character_orders.v1%20esi-location.read_online.v1 esi-contracts.read_character_contracts.v1&state=something123"><img src="/assets/images/eve-sso-login-white-large.png"></a>
					<?php 
						}else{
					?>
						<a href="/logout" class="btn btn-primary" style="margin-top: 10px">Log out</a>
					<?php 
						}
					?>
					

					<!-- <li class="spin-search-box clearfix hidden-xs">
						<a href="#" class="pull-left">
							<i class="fa fa-search fa-lg icon-inactive"></i>
							<i class="fa fa-close fa-lg icon-active"></i>
						</a>
						<div class="input-group input-group-sm pull-left p-10">
							<input type="text" class="form-control" placeholder="Search for...">
							<span class="input-group-btn">
								<button class="btn btn-primary" type="button">
									<i class="fa fa-search"></i>
								</button>
							</span>
						</div>
					</li> -->
				</ul>
				<!-- START Left Side Navbar -->
			</div>
		</div>
	</div>
	<!-- END Navbar -->

	<aside class="navbar-default sidebar affix-top ps-container ps-theme-default" >
		<div class="sidebar-overlay-head">
			<img src="/assets/images/logo.png" alt="Logo" width="90">
			<a href="javascript: void(0)" class="sidebar-switch action-sidebar-close">
				<i class="fa fa-times"></i>
			</a>
		</div>
		<div class="sidebar-logo">
			<img class="logo-default" src="/assets/images/logo.png" alt="Logo" width="53">
			<img class="logo-slim" src="/assets/images/logo.png" alt="Logo" height="13">
		</div>

		<div class="sidebar-content">

			<div class="sidebar-default-visible text-muted small text-uppercase sidebar-section p-y-2">
				<strong>Navigation</strong>
			</div>

			<!-- START Tree Sidebar Common -->
			<ul class="side-menu">

				<!-- <li class="Databases primary-submenu has-submenu">
					<a href="javascript: void(0)" title="Databases">
						<i class="fa fa-table fa-lg fa-fw"></i><span class="nav-label">Databases</span><i class="fa arrow"></i>
					</a>
					<ul data-submenu-title="Start" class="submenu-level-1">
							<li class="">
							<a href="/db/systems">
								<span class="nav-label">Systems DB</span>
							</a>
						</li>
						<li class="">
							<a href="/db/types">
								<span class="nav-label">Types DB</span>
							</a>
						</li>

					</ul>
				</li> -->
				<!-- <?php //echo $_SERVER['REQUEST_URI']; ?> -->
				<li class="<?php if($_SERVER['REQUEST_URI'] == "/"){echo "active";} ?>">
					<a href="/" title="Systems Search">
						<i class="fa fa-lg fa-home  fa-fw"></i><span class="nav-label">Home</span>
					</a>
				</li>
				<li class="<?php if($_SERVER['REQUEST_URI'] == "/marketDashboard"){echo "active";} ?>">
					<a href="/marketDashboard" title="Systems Search">
						<i class="fa fa-lg fa-tachometer  fa-fw"></i><span class="nav-label">Market Data</span>
					</a>
				</li>
				<li class="<?php if($_SERVER['REQUEST_URI'] == "/moneyMakers"){echo "active";} ?>">
					<a href="/moneyMakers" title="Money Makers">
						<i class="fa fa-lg fa-money  fa-fw"></i><span class="nav-label">Money Makers</span>
					</a>
				</li>
				<li class="<?php if($_SERVER['REQUEST_URI'] == "/query/builders"){echo "active";} ?>">
					<a href="/query/builders" title="Types (Items) Search">
						<i class="fa fa-lg fa-crosshairs fa-fw"></i><span class="nav-label">Search Orders</span>
					</a>
				</li>
				<li class="<?php if($_SERVER['REQUEST_URI'] == "/db/systems"){echo "active";} ?>">
					<a href="/db/systems" title="Systems Search">
						<i class="fa fa-lg fa-table  fa-fw"></i><span class="nav-label">Systems Search</span>
					</a>
				</li>
				<li class="<?php if($_SERVER['REQUEST_URI'] == "/db/types"){echo "active";} ?>">
					<a href="/db/types" title="Types (Items) Search">
						<i class="fa fa-lg fa-table fa-fw"></i><span class="nav-label">Types Search</span>
					</a>
				</li>
				<li class="<?php if($_SERVER['REQUEST_URI'] == "/db/searchOrders"){echo "active";} ?>">
					<a href="/db/searchOrders" title="Types (Items) Search">
						<i class="fa fa-lg fa-table fa-fw"></i><span class="nav-label">Search Orders</span>
					</a>
				</li>
			</ul>
		</div>
	</aside>

</nav>