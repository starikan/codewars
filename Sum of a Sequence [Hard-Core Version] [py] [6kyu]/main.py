from decimal import Decimal

def sequence_sum(begin_number, end_number, step):
    if ((begin_number > end_number and step > 0) or (begin_number < end_number and step < 0)):
        return 0

    a, b = begin_number, end_number - (end_number - begin_number) % step
    n = Decimal(1 + (b - a) / step)
    E = Decimal(n * (a + b) / 2)

    return int(E)


if sequence_sum(20, 673388797, 5) != 45345247259849570:
    raise('(20, 673388797, 5) != 45345247259849570')
if sequence_sum(406, -3191, -9) != -555800:
    raise('Error')
if sequence_sum(56861164, 5, -20) != 80829827716452:
    raise('Error')
if sequence_sum(-6512636685, 8346815, -587) != 0:
    raise('Error')
if sequence_sum(1, 5, 3) != 5:
    raise('(1, 5, 3) != 5')
if sequence_sum(-1, -5, -3) != -5:
    raise('(-1, -5, -3) != -5')
if sequence_sum(2, 6, 2) != 12:
    raise('(2, 6, 2) != 12')
if sequence_sum(1, 5, 1) != 15:
    raise('(1, 5, 1) != 15')
if sequence_sum(16, 15, 3) != 0:
    raise('(16, 15, 3) != 0')
if sequence_sum(-24, -2, 22) != -26:
    raise('(-24, -2, 22) != -26')
if sequence_sum(-2, 4, 658) != -2:
    raise('(-2, 4, 658) != -2')
if sequence_sum(780, 6851543, 5) != 4694363402480:
    raise('(780, 6851543, 5) != 4694363402480')
if sequence_sum(9383, 71418, 2) != 1253127200:
    raise('(9383, 71418, 2) != 1253127200')

print('Done')
