// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DiffFilledSvg from 'icons-base/es/asn/DiffFilled';

export interface DiffFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDiffFilled: DiffFilledIconType = (props, context) => <Icon name='DiffFilled' {...{ ...props, ...context.attrs }} icon={DiffFilledSvg} />;

IconDiffFilled.displayName = 'IconDiffFilled';
IconDiffFilled.theme = 'filled';
IconDiffFilled.originName = 'diff';

export default IconDiffFilled;
