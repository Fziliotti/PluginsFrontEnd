
  function modalConfirmar(){
    Swal({
      title: 'Você tem certeza?',
      text: 'Essa operação pode causar futuros danos em seu sistema!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Deletado!',
          'Seu arquivo foi deletado com sucesso!',
          'success'
          )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelado',
          'Seu arquivo não foi deletado.',
          'error'
          )
      }
    })
  };

  function modalSucesso(){
     swal({
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  };

  function modalQuestion(){
    swal(
      'The Internet?',
      'That thing is still around?',
      'question'
      )
  };

  function modalError(){
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
    })
  };

  function modalTopEnd(){
    swal({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  };

  function modalAnimatedCss(){
    swal({
      title: 'Animação cunstomizada com Animate.css',
      animation: false,
      customClass: 'animated tada'
    })
  };


  function modalImagem(){
   swal({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  })
 };


 function modalImagem(){
   swal({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  })
 };

 function modalAutoClose(){
  swal({
    title: 'Auto close alert!',
    text: 'I will close in 2 seconds.',
    timer: 2000,
    onOpen: () => {
      swal.showLoading()
    }
  }).then((result) => {
    if (
    // Read more about handling dismissals
    result.dismiss === swal.DismissReason.timer
    ) {
      console.log('I was closed by the timer')
  }
})

}

// ALERTAS LATERAIS PERSONALIZADOS
 function alertaLateral(tipo, mensagem){
    const toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

    toast({
      type: tipo,
      title: mensagem,
    })
  };


// MODAL ANIMADO
 function modalAnimado(classeAnimada){
    let str1 = "animated ";
    let str2 = classeAnimada;
    let res = str1.concat(str2);
    console.log(res);

    swal({
      title: 'Animação cunstomizada com Animate.css',
      animation: false,
      customClass: res
    })
  };


