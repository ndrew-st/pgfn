
export default {
  props: {
    price: {
      type: String, // тип строковый для того, чтобы работал placeholder
      required: true
    },
    pledge: {
      type: String,
      required: true
    },
    commission: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      locPrice: this.price,
      locPledge: this.pledge,
      locCommission: this.commission
    }
  }
}
