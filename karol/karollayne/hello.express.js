const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send('Envie os parâmetros n1 e n2 para as rotas /soma, /subtracao, /multiplicacao, /divisao ou /calcular')
})


app.get('/soma', (req, res) => {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)

    if (isNaN(n1) || isNaN(n2)) {
        return res.send({ conta: "Valores inválidos." })
    }

    const result = n1 + n2
    res.send({ conta: `${n1} +${n2} = ${result}` }) })  // Rota de Subtração app.get('/subtracao', (req, res) => { const n1 = parseFloat(req.query.n1) const n2 = parseFloat(req.query.n2)  if (isNaN(n1) \vert{}\vert{} isNaN(n2)) { return res.send({ conta: "Valores inválidos." }) }  const result = n1 - n2 res.send({ conta: `${n1} - ${n2} =${result}` })
})


app.get('/multiplicacao', (req, res) => {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)

    if (isNaN(n1) || isNaN(n2)) {
        return res.send({ conta: "Valores inválidos." })
    }

    const result = n1 * n2
    res.send({ conta: `${n1} *${n2} = ${result}` }) })  // Rota de Divisão app.get('/divisao', (req, res) => { const n1 = parseFloat(req.query.n1) const n2 = parseFloat(req.query.n2)  if (isNaN(n1) \vert{}\vert{} isNaN(n2)) { return res.send({ conta: "Valores inválidos." }) }  if (n2 === 0) { return res.send({ conta: "Erro: Não é possível dividir por zero." }) }  const result = n1 / n2 res.send({ conta: `${n1} / ${n2} =${result}` })
})

app.get('/calcular', (req, res) => {
    const { operacao, n1: param1, n2: param2 } = req.query
    const n1 = parseFloat(param1)
    const n2 = parseFloat(param2)

    if (isNaN(n1) || isNaN(n2)) {
        return res.send({ conta: "Valores inválidos." })
    }

    let result
    let simbolo

    switch (operacao) {
        case 'soma':
            result = n1 + n2
            simbolo = '+'
            break
        case 'subtracao':
            result = n1 - n2
            simbolo = '-'
            break
        case 'multiplicacao':
            result = n1 * n2
            simbolo = '*'
            break
        case 'divisao':
            if (n2 === 0) {
                return res.send({ conta: "Erro: Não é possível dividir por zero." })
            }
            result = n1 / n2
            simbolo = '/'
            break
        default:
            return res.send({ conta: "Operação inválida. Use: soma, subtracao, multiplicacao ou divisao." })
    }

    res.send({ conta: `${n1}${simbolo} ${n2} =${result}` })
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})