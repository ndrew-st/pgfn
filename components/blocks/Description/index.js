export default {
  props: {
    title: {
      type: String,
      default: 'Широкий ассортимент и высокое качество'
    },
    description: {
      type: Array,
      default: () => ([
        'Интернет-магазин – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал …',
        'Интернет-магазин – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал …Интернет-магазин – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал …\n' +
        'Интернет-магазин – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал …\n' +
        'Интернет-магазин – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал …'
      ])
    }
  },
  inheritAttrs: false,
  data () {
    return {
      show: false
    }
  }
}