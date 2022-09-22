<?php

use Cake\Datasource\ConnectionManager;
use Cake\ORM\TableRegistry;


$controller = strtolower($this->request->params['controller']);

$prefix = "";
if (isset($this->request->params['prefix'])) {
    $prefix = strtolower($this->request->params['prefix']);
} else {
    $prefix = $controller;
}
//AQUI

$session = $this->request->session();
$modulos = $session->read('login.modulos');
$idperfil = $session->read('login.usuario')->idperfil;
$idusuario = $session->read('login.usuario')->idusuario;
$idempresa = $session->read('login.usuario')->idempresa;
$foto = $session->read('login.usuario')->foto;
$nomeCompleto = explode(' ', $session->read('login.usuario')->nome);
$nome = current($nomeCompleto);
$sobrenome = end($nomeCompleto);




if (!$session->read('login.logo_corretora')) {
    if (!$session->read('login.logo_corretora') == -1) {
        $corret = $this->Custom->query("SELECT nome FROM sys_parans WHERE nome = 'corretora' AND ativo = 1");

        // echo '<pre>';
        // var_dump($corret);
        // die;

        if (count($corret)) {
            $session->write('login.logo_corretora', '/img/logo-hub-nogueira.png');
        } else {
            $session->write('login.logo_corretora', -1);
        }
    } else {
        $session->write('login.logo_corretora', -1);
    }
}


// echo '<pre>';
// var_dump($session->read('login.logo_corretora'));
// die;


?>

<?php if (strpos($prefix, 'flystart') !== false) {

    $modulos = $this->Custom->getInnerJoin('modulo', 'modulousuario', ['modulousuario.idmodulo = modulo.idmodulo'], [
        'modulo.ativo' => 1, 'modulousuario.idusuario' => $idusuario
    ], ['ordem' => 'asc']);
    $idperfil = $session->read('login.perfilcrm')->idperfil_crm;
    $perfil = $session->read('login.perfilcrm')->descricao;
    $usuario = $session->read('login.usuario');
} ?>

<?php
@$idEmpresaSessao = $session->read('login.perfilcrm.idempresa_crm');

if ($idEmpresaSessao) {
    if (($session->read('login.perfilcrm.idempresa_crm')) != null) {
        $logo_src =  $this->Custom->query("SELECT caminho FROM img_empresa_crm WHERE id_empresa = " . $idEmpresaSessao);
        if (isset($logo_src[0])) {
            $logo_src = $logo_src[0];
            $session->write('login.logo_src', $logo_src->caminho);
        } else {
            $session->write('login.logo_src', '');
        }
    }
}
?>


<!DOCTYPE html>
<html lang="pt-BR" data-textdirection="ltr" class="loading" style="zoom: .85 !important;">

<head>
    <style>
        span.btn {
            cursor: pointer;
        }

        .modal-backdrop {
            width: 100% !important;
            height: 100% !important;
        }

        ::-webkit-scrollbar {
            width: 16px !important;
            height: 16px !important;
        }

        ::-webkit-scrollbar-track {
            background: rgb(240, 240, 240) !important;
            border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #c1c1c1 !important;
            border-radius: 10px !important;
            width: 10px !important;
            border: 3px solid rgb(240, 240, 240) !important;
        }

        body::-webkit-scrollbar-track {
            background: white !important;
            border-radius: 8px;
        }
        body::-webkit-scrollbar-thumb {
            border: 3px solid white !important;
        }


        li::-webkit-scrollbar {
            display: none;
        }


        td {
            vertical-align: middle !important;
        }
        
    </style>


    <?= $this->Html->charset() ?>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="FlyGestor">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <?php if (strpos($prefix, 'flystart') !== false) { ?>
        <title>FlyStart</title>
    <?php } else { ?>
        <title>FlyGestor</title>
    <?php } ?>
    <link rel="icon" href="img/logo.png">
    <link rel="apple-touch-icon" href="img/logo.png">
    <link rel="shortcut icon" type="image/x-icon" href="img/logo.png">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i%7COpen+Sans:300,300i,400,400i,600,600i,700,700i" rel="stylesheet">
    <!-- BEGIN VENDOR CSS-->
    <?= $this->Html->css('../novo/app-assets/css/vendors.css') ?>
    <?= $this->Html->css('../novo/app-assets/vendors/css/extensions/unslider.css') ?>
    <?= $this->Html->css('../novo/app-assets/vendors/css/weather-icons/climacons.min.css') ?>
    <?= $this->Html->css('../novo/app-assets/fonts/meteocons/style.css') ?>
    <?= $this->Html->css('../novo/app-assets/vendors/css/charts/morris.css') ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <!-- END VENDOR CSS-->
    <!-- BEGIN STACK CSS-->
    <?= $this->Html->css('../novo/app-assets/css/app.css') ?>
    <!-- END STACK CSS-->
    <!-- BEGIN Page Level CSS-->
    <?= $this->Html->css('../novo/app-assets/css/core/menu/menu-types/vertical-menu.css') ?>
    <?= $this->Html->css('../novo/app-assets/css/core/colors/palette-gradient.css') ?>
    <?= $this->Html->css('../novo/app-assets/fonts/simple-line-icons/style.css') ?>
    <?= $this->Html->css('../novo/app-assets/css/core/colors/palette-gradient.css') ?>
    <?= $this->Html->css('../novo/app-assets/css/pages/timeline.css') ?>
    <?= $this->Html->css('../novo/app-assets/vendors/css/tables/datatable/datatables.min.css') ?>

    <?= $this->Html->css('../novo/app-assets/css/plugins/pickers/daterange/daterange.min.css') ?>
    <?= $this->Html->css('../novo/app-assets/vendors/css/pickers/daterange/daterangepicker.css') ?>
    <?= $this->Html->css('../novo/app-assets/vendors/css/pickers/datetime/bootstrap-datetimepicker.css') ?>
    <?= $this->Html->css('../novo/app-assets/vendors/css/pickers/pickadate/pickadate.css') ?>
    <!-- END Page Level CSS-->
    <!-- BEGIN Custom CSS-->
    <?= $this->Html->css('../novo/app-assets/fonts/aproncnbold/style.css') ?>
    <?= $this->Html->css('../novo/app-assets/css/style.css') ?>
    <?= $this->Html->css('../novo/app-assets/css/util.css') ?>
    <!-- END Custom CSS-->
    <?= $this->Html->script('googlechart-loader.js') ?>
    <?= $this->Html->script('echarts-all.js') ?>
    <?= $this->fetch('script') ?>
    <!-- BEGIN VENDOR JS-->
    <?= $this->Html->script('../novo/app-assets/vendors/js/vendors.min.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/tables/datatable/datatables.min.js') ?>
    <?= $this->Html->script('https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js') ?>
    <!-- <?= $this->Html->script('app/pedidovenda/app.js') ?> -->

    <!-- script funcoes -->
    <?= $this->Html->script('../js/funcoes.js') ?>

    <!-- boostap file input -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.9/css/fileinput.min.css" media="all" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pivottable/2.13.0/pivot.min.css" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.9/js/plugins/piexif.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.9/js/plugins/sortable.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.9/js/fileinput.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.9/themes/fas/theme.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.9/js/locales/pt-BR.js"></script>

    <!-- select2, novo select com barra de pesquisa -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.12/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.12/dist/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/i18n/pt-BR.min.js"></script>

    <!-- Sweet alert 2
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script> -->

    <!-- Tree table Jquery -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-treetable/3.2.0/css/jquery.treetable.theme.default.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-treetable/3.2.0/css/jquery.treetable.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-treetable/3.2.0/jquery.treetable.min.js"></script>

<!-- 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
 -->

    
    <!-- DOUBLE SCROLL JS-->
    <?= $this->Html->script('../novo/app-assets/js/scripts/jquery.doubleScroll.js') ?>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.0-rc.2/jquery-ui.min.js" integrity="sha256-55Jz3pBCF8z9jBO1qQ7cIf0L+neuPTD1u7Ytzrp2dqo=" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.12.0-rc.2/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="https://pivottable.js.org/dist/pivot.css">
    <link rel="stylesheet" href="https://selectize.dev/css/selectize.bootstrap4.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script type="text/javascript" src="https://pivottable.js.org/dist/pivot.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
    <script type="text/javascript" src="https://pivottable.js.org/examples/show_code.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/styles/color-brewer.min.css">
    <!-- smartwizard -->
    <?= $this->Html->css('../novo/app-assets/vendors/css/smartwizard/smartwizard.css') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/smartwizard/smartwizard.js') ?>
    <!-- tagEditor -->
    <?= $this->Html->css('../novo/app-assets/vendors/js/jQuery-tagEditor/jquery.tag-editor.css') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/jQuery-tagEditor/jquery.caret.min.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/jQuery-tagEditor/jquery.tag-editor.min.js') ?>
    <style>
        .ui-autocomplete {
            z-index: 99999 !important;
            max-height: 50vh;
            overflow-y: auto;
            overflow-x: hidden;
        }

        .page-item.active .page-link {
            background-color: #00b5b8;
            border-color: #00b5b8;
        }
    </style>
</head>
<script src="https://selectize.dev/js/selectize.js"></script>


<body data-open="click" data-menu="vertical-menu" data-col="2-columns" class="vertical-layout vertical-menu 2-columns   menu-expanded fixed-navbar">
    <!-- - var navbarShadow = true-->
    <!-- fixed-top-->
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-semi-light bg-gradient-x-grey-blue">
        <div class="navbar-wrapper">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row mb-4">

                    <?php  ?>

                    <li class="nav-item mobile-menu d-md-none mr-auto"><a href="#" class="nav-link nav-menu-main menu-toggle hidden-xs"><i class="ft-menu font-large-1"></i></a></li>

                    <?php if ($session->read('login.logo_corretora') != -1) { ?>
                        <li class="nav-item text-center">
                            <?= $this->Html->link(
                                $this->Html->image("logo-hub-nogueira.png", [
                                    'class' => 'brand-logo',
                                    'style' => 'width: 80%;'
                                ]),
                                $session->read('login.perfilcrm')->pagina_inicial,
                                ['class' => 'navbar-brand', 'escape' => false]
                            ) ?>
                        </li>
                    <?php } else if (strpos($prefix, 'flystart') !== false) { ?>
                        <li class="nav-item mb-4">
                            <?= $this->Html->link(
                                $this->Html->image("logo-flystart.png", [
                                    'class' => 'brand-logo',
                                    'style' => 'width: 35px;'
                                ]) . '<h2 style="margin-top: -5px;" class=" pl-4 ml-0 mb-3 brand-text fontenova">FlyStart</h2>',
                                $session->read('login.perfilcrm')->pagina_inicial,
                                ['class' => 'navbar-brand', 'escape' => false]
                            ) ?>
                        </li>
                    <?php } else { ?>
                        <li class="nav-item">
                            <?= $this->Html->link(
                                $this->Html->image("logo.png", [
                                    'class' => 'brand-logo',
                                    'style' => 'width: 46px;'
                                ]) . '<h2 class="brand-text fontenova">FlyGestor</h2>',
                                "/$prefix/",
                                ['class' => 'navbar-brand', 'escape' => false]
                            ) ?>
                        </li>
                    <?php } ?>
                    <li class="nav-item d-md-none">
                        <a data-toggle="collapse" data-target="#navbar-mobile" class="nav-link open-navbar-container"><i class="fa fa-ellipsis-v"></i></a>
                    </li>
                </ul>

            </div>
            <div class="navbar-container content">
                <div id="navbar-mobile" class="collapse navbar-collapse">
                    <!-- carrega filiais FLYGESTOR-->
                    <?php if (strpos($prefix, 'flystart') === false) { ?>
                        <ul class="nav navbar-nav mr-auto float-left">
                            <li class="nav-item d-none d-md-block"><a href="#" class="nav-link nav-menu-main menu-toggle hidden-xs is-active"><i class="ft-menu"></i></a></li>
                            <?php if ($session->read('empresas') != null && $idperfil != 4) { ?>
                                <li class="dropdown nav-item mega-dropdown">

                                    <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown" aria-expanded="false">
                                        Escolher filial
                                    </a>
                                    <ul class="mega-dropdown-menu dropdown-menu row">
                                        <li class="col-md-12">
                                            <form action="" method="POST" id="menu-contexto-filial">
                                                <?php
                                                $filiais = $session->read('filiais');
                                                $filial  = $session->read('filial');
                                                if (count($filiais) == 1) {
                                                    echo "<br>" . $filiais[0]['nomefilial'];
                                                } else {
                                                    $filial = $session->read('filial');
                                                    echo '<select multiple name="contexto-idfilial[]" class="form-inline form-control" >';
                                                    foreach ($filiais as $optionfilial) {
                                                        $selected = "";
                                                        foreach ($filial as $contextofilial) {
                                                            if ($contextofilial['idfilial'] == $optionfilial['idfilial']) {
                                                                $selected = "selected";
                                                            }
                                                        }
                                                        echo '<option value="' . $optionfilial['idfilial'] . '" ' . $selected . '>' . $optionfilial['nomefilial'] . '</option>';
                                                    }
                                                    echo '</select>';
                                                }
                                                ?>
                                                <?php if (count($filiais) > 1) { ?>
                                                    <button class="btn btn-primary form-control" onclick="$('#loading').show();document.getElementById('menu-contexto-filial').submit()"><i class="fa fa-check"></i> Ok</button>
                                                <?php } //fim if
                                                ?>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            <?php } //fim if filial
                            ?>
                        </ul>
                        <!-- fim carrega filiais FLYGESTOR-->
                    <?php } else { ?>
                        <ul class="nav navbar-nav mr-auto float-left">
                            <li class="nav-item d-none d-md-block"><a href="#" class="nav-link nav-menu-main menu-toggle hidden-xs is-active"><i class="ft-menu"></i></a></li>

                            <div calss="row">
                                <div class="col-md-12 mt-3">
                                    <span style="font-size:15px;color:#FFF; white-space: nowrap"><?= $session->read('login.empresa_crm.razaosocial') ?></span>
                                </div>
                            </div>
                        </ul>

                        <script>
                            $(document).ready(() => {
                                $("#busca").autocomplete({
                                    source: function(request, response) {
                                        $.ajax({
                                            url: "<?= $this->request->getAttribute("base") ?>/flystart/cfg/clifor/buscageral",
                                            type: "GET",
                                            dataType: "json",
                                            data: {
                                                term: request.term
                                            },
                                            success: function(msg) {
                                                // console.log();
                                                let resultado = $.parseJSON(msg.resultadojson);
                                                if ($.parseJSON(msg.resultadojson).length == 0) {
                                                    resultado = $.parseJSON('{"label":"Sem resultado"}');
                                                }
                                                response(resultado);
                                            },
                                            error: function(request, status, error) {
                                                // console.log(request.responseText, status, error);
                                            }
                                        })
                                    },
                                    minLength: 2,
                                    select: function(event, ui) {
                                        window.open(ui.item.link);

                                    },
                                    close: function(event, ui) {
                                        $("#busca").val("");
                                    }

                                });
                            })
                        </script>
                    <?php } ?>

                    <?php
                    foreach ($modulos as $modulo) {
                        if ($modulo->chave == "falecomfly") { ?>
                            <ul class="nav navbar-nav mr-auto float-left">
                                <li class="nav-item nav-search">
                                    <a class="nav-link nav-link-search" href="<?= $this->request->base ?>/adm/busca" data-toggle="modal" data-target="#modal"><i class="fa fa-microphone"></i>
                                        Fale com o Fly
                                    </a>
                                </li>
                            </ul>
                    <?php }
                    } ?>
                    <!-- Notificação -->
                    <?php if (strpos($prefix, 'flystart') !== false) { ?>
                        <ul class="nav navbar-nav float-right">
                            <div class="input-group">
                                <input id="busca" class="form-control w-25" placeholder="Procurar por...">
                            </div>
                        </ul>
                        <ul class="nav navbar-nav float-right">
                            <li class="dropdown dropdown-user nav-item">
                                <a href="#" data-toggle="dropdown" class="nav-link dropdown-user-link" aria-expanded="true">
                                    <span class="fa-layers fa-fw">
                                        <i class="fas fa-bell fa-lg"></i>
                                        <span class="fa-layers-counter" id="countnotificacao"><i class="fas fa-spinner fa-sm fa-spin"></i></span>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" id="notiticacao">
                                    <div class="dropdown-divider"></div>
                                    <div class="d-flex justify-content-around">
                                        <div id="ver_todas_notificacoes" class="btn btn-sm btn-primary m-2"><i class="far fa-eye" style="margin-right: 0px !important;"></i></div>
                                        <div id="marcar_todas" class="btn btn-sm btn-primary m-2"> <i class="fas fa-check" style="margin-right: 0px !important;"></i></div>
                                    </div>
                                </div>
                            </li>
                            <audio id="song-notification">
                                <source src="<?= $this->request->getAttribute('webroot') ?>webroot/novo/audio/notification.ogg" type="audio/ogg">
                                <source src="<?= $this->request->getAttribute('webroot') ?>webroot/novo/audio/notification.mp3" type="audio/mpeg">
                                <source src="<?= $this->request->getAttribute('webroot') ?>webroot/novo/audio/notification.m4r" type="audio/m4r">
                            </audio>
                            <script>
                                var totalnotificacao = 0;
                                var qtd_all_notification = 0;
                                var id_last_notification = 0;

                                function pesquisaNotificacao() {

                                    $.ajax({
                                        url: `<?php echo $this->request->getAttribute('base') ?>/flystart/notificacao/all/`,
                                        method: 'POST',
                                        cache: false,
                                        success: function(resp) {
                                            resp = JSON.parse(resp);
                                            // console.log(resp.length)
                                            if (resp.length == 0) {
                                                $("#notiticacao").prepend(`<a id='div_remover_notificacao' href="#" class="dropdown-item"><p class="font-weight-bold text-truncate"> Nenhuma notificação</p><p class="font-weight-light text-wrap" style="max-width: 500px;"></p></a>`)
                                            } else {
                                                resp.map(item => {
                                                    qtd_all_notification += 1;
                                                    totalnotificacao += 1
                                                    $('#div_remover_notificacao').hide()
                                                    $("#notiticacao").prepend(`<a href="#" onclick="abrirlinknotificacao('` + item.link + `',` + item.notificacaoid + `)" class="dropdown-item"><p class="font-weight-bold text-truncate">` + item.name + `</p><p class="font-weight-light text-wrap" style="max-width: 500px;">` + item.mensagem + `</p></a>`)

                                                    id_last_notification = item.notificacaoid
                                                })
                                                $("#countnotificacao").html(totalnotificacao.toLocaleString('pt-BR'));
                                            }
                                        },
                                        error: function() {}
                                    })
                                }

                                function novaNotificacao() {
                                    $.ajax({
                                        url: `<?php echo $this->request->getAttribute('base') ?>/flystart/notificacao/last/${id_last_notification}`,
                                        method: 'POST',
                                        cache: false,
                                        success: function(resp) {
                                            resp = JSON.parse(resp);
                                            resp.map(item => {
                                                qtd_all_notification += 1;
                                                totalnotificacao += 1
                                                $('#div_remover_notificacao').hide()
                                                $("#notiticacao").prepend(`<a href="#" onclick="abrirlinknotificacao('` + item.link + `',` + item.notificacaoid + `)" class="dropdown-item"><p class="font-weight-bold text-truncate">` + item.name + `</p><p class="font-weight-light text-wrap" style="max-width: 500px;">` + item.mensagem + `</p></a>`)
                                                id_last_notification = item.notificacaoid
                                            })
                                            $("#countnotificacao").html(totalnotificacao.toLocaleString('pt-BR'));

                                        },
                                        error: function() {}
                                    })
                                }

                                setInterval(() => {
                                    novaNotificacao()
                                }, 1000000);

                                $('#ver_todas_notificacoes').click(function() {
                                    window.location.replace(`<?php echo $this->request->getAttribute('base') ?>/flystart/notificacao`)
                                })
                                $('#marcar_todas').click(function() {
                                    $.ajax({
                                        url: `<?= $this->request->getAttribute('base') ?>/flystart/notificacao/visualizedall`,
                                        method: 'POST'
                                    })
                                })

                                $(document).ready(() => {
                                    pesquisaNotificacao()
                                    // $.ajax({
                                    // 	url: "<?= $this->request->getAttribute('base') ?>/flystart/notificacao/all/",
                                    // 	type: "GET",
                                    // 	dataType: "json"
                                    // }).done((res) => {
                                    // 	totalnotificacao += res.length
                                    // 	$("#countnotificacao").html(totalnotificacao.toLocaleString('pt-BR'));
                                    // 	res.forEach(n => {
                                    // 		if (n.visto == "0") {
                                    // 			$("#notiticacao").append(`<a href="#" onclick="abrirlinknotificacao('` + n.link + `',` + n.notificacaoid + `)" class="dropdown-item"><p class="font-weight-bold text-truncate">` + n.tipo + `</p><p class="font-weight-light text-wrap" style="max-width: 500px;">` + n.mensagem + `</p></a>`)
                                    // 		}
                                    // 		idlastnotificacao = n.notificacaoid
                                    // 	});
                                    // });
                                    // setInterval(() => {
                                    // 	if (idlastnotificacao) {
                                    // 		$.ajax({
                                    // 			url: "<?= $this->request->getAttribute('base') ?>/flystart/notificacao/last/" + idlastnotificacao,
                                    // 			type: "GET",
                                    // 			dataType: "json"
                                    // 		}).done((res) => {
                                    // 			totalnotificacao += res.length
                                    // 			$("#countnotificacao").html(totalnotificacao.toLocaleString('pt-BR'));
                                    // 			res.forEach(n => {
                                    // 				if (n.visto == "0") {
                                    // 					$("#notiticacao").append(`<a href="#" onclick="abrirlinknotificacao('` + n.link + `',` + n.notificacaoid + `)" class="dropdown-item"><p class="font-weight-bold text-truncate">` + n.tipo + `</p><p class="font-weight-light text-wrap" style="max-width: 500px;">` + n.mensagem + `</p></a>`)
                                    // 				} else {
                                    // 					$("#notiticacao").append(`<a href="#" onclick="abrirlinknotificacao('` + n.link + `')" class="dropdown-item" style="opacity: 0.6;"><p class="font-weight-bold text-truncate">` + n.tipo + `</p><p class="font-weight-light text-wrap" style="max-width: 500px;">` + n.mensagem + `</p></a>`)
                                    // 				}
                                    // 				idlastnotificacao = n.notificacaoid
                                    // 			});
                                    // 			if (res.length > 0) {
                                    // 				var song = document.getElementById("song-notification");
                                    // 				song.play();
                                    // 			}
                                    // 		});
                                    // 	}
                                    // }, 300000);
                                });
                                async function abrirlinknotificacao(url = "", id = null) {

                                    if (url != null && url != 'null') {
                                        if (id) {
                                            await navigator.sendBeacon("<?= $this->request->getAttribute('base') ?>/flystart/notificacao/visto/" + id);
                                        }
                                        window.location.href = "<?= $this->request->getAttribute('base') ?>/" + url;
                                    }

                                }
                            </script>
                        </ul>
                    <?php } ?>
                    <!-- Fim notificação -->



                    <ul class="nav navbar-nav float-right">
                        <?php if ($session->read('empresas') != null && strpos($prefix, 'flystart') === false) { ?>
                            <li class="nav-item" style="padding-top:1px;color:#fff">
                                <form action="" method="POST" id="menu-contexto-empresa">
                                    <?php
                                    $empresas = $session->read('empresas');
                                    $empresa  = $session->read('empresa');
                                    if (count($empresas) == 1) {
                                        echo "<br><span>" . $empresas[0]['nomeempresa'] . "&nbsp;&nbsp;</span>";
                                    } else {
                                        $empresa = $session->read('empresa');
                                        echo '<select id="select-empresacontexto" name="contexto-idempresa" class="form-inline form-control" onchange="$(\'#loading\').show();document.getElementById(\'menu-contexto-empresa\').submit()">';
                                        echo '<option value="-1">Todas as empresas</option>';
                                        foreach ($empresas as $optionempresa) {
                                            $selected = "";
                                            if (count($empresa) == 1 && $optionempresa['idempresa'] == $empresa[0]['idempresa']) {
                                                $selected = "selected";
                                            }
                                            echo '<option value="' . $optionempresa['idempresa'] . '" ' . $selected . '>' . $optionempresa['nomeempresa'] . '</option>';
                                        }
                                        echo '</select>';
                                    }
                                    ?>
                                    <br>
                                    <?php if (strpos($prefix, 'flystart') !== false) { ?>
                                        <span style="font-size:8px"><?= $perfil ?></span>
                                    <?php } ?>
                                </form>
                            </li>
                        <?php } //fim if empresa
                        ?>
                        <li class="dropdown dropdown-user nav-item">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle nav-link dropdown-user-link">
                                <?php if ($idempresa == 1) { ?>
                                    <?php if ($foto == null) { ?>
                                        <div class="avatar avatar-online"><img src="<?= $this->request->base ?>/img/user-avatar.png" alt="avatar"><i></i></div>

                                    <?php } else { ?>

                                        <div class="avatar avatar-online"><img src="<?= $this->request->base ?>/files/foto_usuario/<?= $idusuario ?>/<?= $foto ?>" alt="avatar"><i></i></div>
                                    <?php } ?>
                                <?php } ?>
                                <span class="user-name"><?= $nome ?> <?= $sobrenome ?></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <?php
                                $trocarempresa = $session->read('trocarempresa');
                                if ($trocarempresa) {
                                    echo $this->Html->link(
                                        '<i class="fa fa-exchange"></i> Trocar Empresa',
                                        "/adm/contexto",
                                        ['escape' => false, 'class' => 'dropdown-item']
                                    );
                                }
                                ?>
                                <?php if ($idempresa == 1) {
                                    echo $this->Html->link(
                                        '<i class="ft-user"></i> Minha conta',
                                        "/controladoria/minhaconta",
                                        ['escape' => false, 'class' => 'dropdown-item']
                                    );
                                } else {
                                    //ESPECIFICAÇÃO PARA O FLYSTART

                                    if (strpos($prefix, 'flystart') !== false) {

                                        $session = $this->request->session();
                                        $perfis_crm = $session->read('login.perfis_crm');

                                        $empresa_crm = $perfis_crm[0]->idempresa_crm;

                                        // Mudando conecção do banco para controladoria
                                        ConnectionManager::alias('controladoria', 'default');

                                        foreach ($perfis_crm as $item) {
                                            if ($item->idperfil_crm == 2 || $item->idperfil_crm == 3 || $empresa_crm != $item->idempresa_crm) {
                                                echo $this->Html->link(
                                                    '<i class="fa fa-exchange"></i> Trocar Empresa',
                                                    "/flystart/contexto/empresa",
                                                    ['escape' => false, 'class' => 'dropdown-item']
                                                );
                                                break;
                                            }
                                            $empresa_crm = $item->idempresa_crm;
                                        }

                                        // Mudando conecção do banco para clientes
                                        ConnectionManager::alias('conn1', 'default');

                                        echo $this->Html->link(
                                            '<i class="ft-user"></i> Minha conta',
                                            "/flystart/minhaconta",
                                            ['escape' => false, 'class' => 'dropdown-item']
                                        );

                                        echo $this->Html->link(
                                            '<i class="fa fa-question-circle"></i> Ajuda',
                                            "/flystart/ajuda",
                                            ['escape' => false, 'class' => 'dropdown-item']
                                        );

                                        echo $this->Html->link(
                                            '<i class="fas fa-key"></i> Alterar Senha',
                                            "/flystart/alterarsenha/alterar",
                                            ['escape' => false, 'class' => 'dropdown-item']
                                        );
                                    } else {
                                        echo $this->Html->link(
                                            '<i class="ft-user"></i> Minha conta',
                                            "/adm/minhaconta",
                                            ['escape' => false, 'class' => 'dropdown-item']
                                        );

                                        echo $this->Html->link(
                                            '<i class="fa fa-question-circle"></i> Ajuda',
                                            "/adm/ajuda",
                                            ['escape' => false, 'class' => 'dropdown-item']
                                        );

                                        echo $this->Html->link(
                                            '<i class="fas fa-key"></i> Alterar Senha',
                                            "/adm/alterarsenha/alterar",
                                            ['escape' => false, 'class' => 'dropdown-item']
                                        );
                                    }
                                } ?>

                                <div class="dropdown-divider"></div>
                                <?= $this->Html->link(
                                    '<i class="ft-power"></i> Sair',
                                    "/adm/logout",
                                    ['escape' => false, 'class' => 'dropdown-item']
                                ) ?>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- ////////////////////////////////////////////////////////////////////////////-->
    <div data-scroll-to-active="true" class="main-menu menu-fixed menu-light menu-accordion menu-shadow">
        <div class="main-menu-content <?= $session->read('login.logo_corretora') != -1 ? ' mt-4 ' : ' mt-1 ' ?>">
            <?php
            if ($prefix == "adm" || $prefix == "inteligenciavendas" || $prefix == "emailnotificacao" || strpos($prefix, 'flystart') !== false) {
                include "adm_sidebar.ctp";
            }
            if ($prefix == "controladoria") {
                include "controladoria_sidebar.ctp";
            }
            ?>
        </div>
    </div>
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <?= $this->Flash->render() ?>

                <div class="col-md-12">
                    <?= $this->fetch('content') ?>
                </div>
            </div>
        </div>
    </div>
    <!--MODAL-------------------------------------------------------------------------->
    <div class="modal fade text-left" id="modal" role="dialog" aria-labelledby="modallabel" data-keyboard="true" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary white">
                    <h4 style="text-align:center;width: 100%;" class="modal-title" id="modallabel">
                        <?php if (strpos($prefix, "flystart") !== false) {
                            $logo = "logo_flystart.png";
                        } else {
                            $logo = "logo2.png";
                        }
                        ?>
                        <?php $logo = $session->read('login.logo_src') ? $session->read('login.logo_src') : $logo ?>
                        <?= $this->Html->link(
                            $this->Html->image($logo, [
                                'class' => 'brand-logo',
                                'style' => "max-height: 100px;"
                            ]),
                            "#",
                            ['class' => 'navbar-brand', 'escape' => false]
                        ) ?>
                        <br>
                        <span style="font-size:12px">
                            <?php
                            $empresas = $session->read('empresas');
                            if (strpos($prefix, 'flystart') !== false) {
                                // echo $empresas->first()->razaosocial;
                                // echo $empresas[0]['nomeempresa'];
                            } else {
                                if (count($empresas) == 1) {
                                    // echo $empresas[0]['nomeempresa'];
                                }
                            }
                            ?>
                        </span>
                    </h4>
                    <a class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </a>
                </div>
                <div class="modal-body"></div>

                <div class="modal-footer">
                    <a id="fecharModal" class="btn grey btn-outline-secondary" data-keyboard="true" data-dismiss="modal">
                        <i class="fa fa-times"></i> Sair
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!--MODAL-------------------------------------------------------------------------->
    <div class="modal fade text-left" id="modal_default" tabindex="-1" role="dialog" aria-labelledby="modallabel_default" aria-hidden="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary white">
                    <h4 style="text-align:center;width: 100%;" class="modal-title" id="modallabel_default">
                        <?php if (strpos($prefix, "flystart") !== false) {
                            $logo = "logo_flystart.png";
                        } else {
                            $logo = "logo2.png";
                        }
                        ?>
                        <?php $logo = $session->read('login.logo_src') ? $session->read('login.logo_src') : $logo ?>

                        <?= $this->Html->link(
                            $this->Html->image($logo, [
                                'class' => 'brand-logo',
                                'style' => "max-height: 100px;"
                            ]),
                            "#",
                            ['class' => 'navbar-brand', 'escape' => false]
                        ) ?>
                        <br>
                        <span style="font-size:12px">
                            <?php
                            $empresas = $session->read('empresas');
                            if (strpos($prefix, 'flystart') !== false) {
                                // echo $empresas[0]->razaosocial;
                            } else {
                                if (count($empresas) == 1) {
                                    // echo $empresas[0]['nomeempresa'];
                                }
                            }
                            ?>
                        </span>
                    </h4>
                    <button type="button" class="close" data-dismiss="modal_default" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn grey btn-outline-secondary" data-dismiss="modal_default">
                        <i class="fa fa-times"></i> Sair
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <?php
    /*
	$this->element('demandareprimida',[
	'idperfil'=>$idperfil
	,'modulos'=>$modulos

  ])*/ ?>
    <footer style="position: fixed; width: 100%; bottom: 0; z-index: 5;" class="footer footer-static footer-dark navbar-border">
        <p class="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2 content">
            <span class="float-md-left d-block d-md-inline-block">FlyGestor - <?= date('Y') ?> | Desenvolvido por: <a href="http://corpstek.com.br" target="_blank"> Corps Teknologi</a></span>
        </p>
    </footer>
    <div id="loading" style="width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   position: fixed;
   display: none;
   opacity: 0.8;
   background-color: #fff;
   z-index: 99;
   text-align: center;">

        <?= $this->Html->image('loading.gif', ['id' => 'loading-image', 'style' => 'width:400px; margin-top: 30vh; margin-left: 110px;']) ?>
        <br>
        <div style="margin-top:-100px; margin-left: 110px;">
            <b>Analisando seus dados<b>
        </div>
    </div>
    <!-- BEGIN VENDOR JS-->
    <!-- BEGIN PAGE VENDOR JS-->
    <?= $this->Html->script('../novo/app-assets/vendors/js/charts/raphael-min.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/charts/morris.min.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/extensions/unslider-min.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/timeline/horizontal-timeline.js') ?>
    <!-- END PAGE VENDOR JS-->
    <!-- BEGIN STACK JS-->
    <?= $this->Html->script('../novo/app-assets/js/core/app-menu.js') ?>
    <?= $this->Html->script('../novo/app-assets/js/core/app.js') ?>

    <!-- END STACK JS-->
    <!-- BEGIN PAGE LEVEL JS-->
    <?= $this->Html->script('../novo/app-assets/js/scripts/pages/dashboard-ecommerce.js') ?>
    <!-- END PAGE LEVEL JS-->

    <!--date picker-->
    <?= $this->Html->script('../novo/app-assets/vendors/js/pickers/dateTime/moment-with-locales.min.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/pickers/dateTime/bootstrap-datetimepicker.min.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/pickers/pickadate/picker.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/pickers/pickadate/picker.date.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/pickers/pickadate/picker.time.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/pickers/pickadate/legacy.js') ?>
    <?= $this->Html->script('../novo/app-assets/vendors/js/pickers/daterange/daterangepicker.js') ?>

    <!--GOOGLE ANALYTICS-->
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-XXXX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-XXXXX');
    </script>

    <script>
        $(function() {
            $('a[data-toggle="modal"]').on('click', function(e) {
                $('.modal-body').html('<div style="text-align:center"><i class="fa fa-refresh fa-spin"></i></div>');
                e.preventDefault();
                $('#modal').modal('show').find('.modal-body').load($(this).attr('href'), function(responseText, textStatus, req) {
                    if (textStatus == "error") {
                        alert('Sua consulta retornou um número muito grande de registros. Tente um período menor.');
                        $('[data-dismiss="modal"]').click();
                    }
                });
                $('#loading').hide();
            });

            $('button[data-dismiss="modal"]').on('click', function(e) {
                $('.modal-body').html("");
            });
        });
    </script>
    <script>
        function buscanomemenu(event) {
            var busca = $('#buscanomemenu').val();
            if (event.keyCode == 13) {
                window.location.href = '<?= $this->request->getAttribute('base') ?>/adm/busca/buscar?busca=' + busca;
            }
        }


        $(document).keyup(function(e) {
            if (e.keyCode === 27) {
                $('#modal').modal("hide")
            }
        });



        // function keyPressed(evt){
        //     evt = evt || window.event;
        //     var key = evt.keyCode || evt.which;
        //     console.log(key)
        //     return String.fromCharCode(key);
        // }

        // document.onkeypress = function(evt) {
        //     var str = keyPressed(evt);
        // };
    </script>

    <style>
        /* The switch - the box around the slider */
        .switch {
            position: relative;
            display: inline-block;
            width: 30px;
            height: 17px;
        }

        /* Hide default HTML checkbox */
        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        /* The slider */
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 13px;
            width: 13px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        /* The slider */
        .slider2 {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider2:before {
            position: absolute;
            content: "";
            height: 13px;
            width: 13px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        input:checked+.slider {
            background-color: #2196F3;
        }

        input:focus+.slider {
            box-shadow: 0 0 1px #2196F3;
        }

        input:checked+.slider2 {
            background-color: #90EE90;
        }

        input:focus+.slider2 {
            box-shadow: 0 0 1px #90EE90;
        }

        input:checked+.slider:before {
            -webkit-transform: translateX(13px);
            -ms-transform: translateX(13px);
            transform: translateX(13px);
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 17px;
        }

        .slider.round:before {
            border-radius: 50%;
        }

        input:checked+.slider2:before {
            -webkit-transform: translateX(13px);
            -ms-transform: translateX(13px);
            transform: translateX(13px);
        }

        /* Rounded sliders */
        .slider2.round {
            border-radius: 17px;
        }

        .slider2.round:before {
            border-radius: 50%;
        }
    </style>
</body>

</html>