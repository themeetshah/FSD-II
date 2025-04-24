var do_rev = require('./Own_Module_04');

for (i = 1; i <= 100; i++) {
    let norm = i;
    let norm_sq = norm * norm;
    let rev = do_rev.rev(i);
    let rev_sq = rev * rev;
    if (do_rev.rev(norm_sq) == rev_sq) {
        console.log(norm, rev, norm_sq, rev_sq)
    }
}

// console.log(do_rev.rev(12))